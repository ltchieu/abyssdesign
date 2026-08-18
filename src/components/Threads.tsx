import React, { useEffect, useRef } from 'react';

interface ThreadsProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

const vertexShaderSource = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision highp float;

varying vec2 vUv;
uniform float iTime;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 45;
const float u_line_width = 14.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength * amplitude * (1.0 + (mouse.y - 0.5) * 0.25);

    float time_scaled = time / 8.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;
    float halfWidth = max(0.002, width * 0.5 + u_line_blur * 0.0008 * blur);
    float dist = abs(st.y - y);
    float line_alpha = 1.0 - smoothstep(0.0, halfWidth, dist);

    return clamp(
        line_alpha * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.4))),
        0.0,
        1.0
    );
}

void main() {
    vec2 uv = vUv;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * 0.001 * (1.0 - p * 0.5),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = clamp((1.0 - line_strength) * 3.2, 0.0, 1.0);
    gl_FragColor = vec4(uColor, colorVal);
}
`;

export const Threads: React.FC<ThreadsProps> = ({
  color = [0.02, 0.48, 0.85],
  amplitude = 1.6,
  distance = 0.2,
  enableMouseInteraction = true,
  className = '',
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>(0);

  const propsRef = useRef({ color, amplitude, distance, enableMouseInteraction });
  propsRef.current = { color, amplitude, distance, enableMouseInteraction };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true }) || 
               canvas.getContext('experimental-webgl', { alpha: true, antialias: true }) as WebGLRenderingContext | null;

    if (!gl) {
      console.warn('WebGL is not supported on this browser/device');
      return;
    }

    function createShader(glContext: WebGLRenderingContext, type: number, source: string) {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.warn('Shader compile error:', glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    // Quad geometry (Full Screen Triangle)
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'position');

    const uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 2, 0, 0, 2]), gl.STATIC_DRAW);
    const uvLoc = gl.getAttribLocation(program, 'uv');

    // Uniform locations
    const timeLoc = gl.getUniformLocation(program, 'iTime');
    const colorLoc = gl.getUniformLocation(program, 'uColor');
    const ampLoc = gl.getUniformLocation(program, 'uAmplitude');
    const distLoc = gl.getUniformLocation(program, 'uDistance');
    const mouseLoc = gl.getUniformLocation(program, 'uMouse');

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const MAX_RENDER_DIM = 1920;
    function resize() {
      if (!container || !canvas || !gl) return;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      if (width <= 0 || height <= 0) return;

      const baseDpr = Math.min(window.devicePixelRatio || 1, 2);
      const longestSide = Math.max(width, height) * baseDpr;
      const dpr = longestSide > MAX_RENDER_DIM ? (baseDpr * MAX_RENDER_DIM) / longestSide : baseDpr;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener('resize', resize);
    resize();

    // Call resize on delayed intervals to adapt to loader transitions
    const t1 = setTimeout(resize, 100);
    const t2 = setTimeout(resize, 500);
    const t3 = setTimeout(resize, 2000);

    const currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];

    function handleMouseMove(e: MouseEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, 1.0 - (e.clientY - rect.top) / rect.height));
      targetMouse = [x, y];
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const startTime = performance.now();

    function render(t: number) {
      animationFrameId.current = requestAnimationFrame(render);
      if (document.hidden || !gl || !program) return;

      const { color, amplitude, distance, enableMouseInteraction } = propsRef.current;

      gl.useProgram(program);

      // Bind attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
      gl.enableVertexAttribArray(uvLoc);
      gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

      if (enableMouseInteraction) {
        const smoothing = 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        gl.uniform2f(mouseLoc, currentMouse[0], currentMouse[1]);
      } else {
        gl.uniform2f(mouseLoc, 0.5, 0.5);
      }

      gl.uniform1f(timeLoc, (t - startTime) * 0.001);
      gl.uniform3f(colorLoc, color[0], color[1], color[2]);
      gl.uniform1f(ampLoc, amplitude);
      gl.uniform1f(distLoc, distance);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(canvas)) container.removeChild(canvas);
      if (posBuffer) gl.deleteBuffer(posBuffer);
      if (uvBuffer) gl.deleteBuffer(uvBuffer);
      if (program) gl.deleteProgram(program);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className}`} {...rest} />;
};

export default Threads;
