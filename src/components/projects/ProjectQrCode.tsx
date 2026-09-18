import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

interface ProjectQrCodeProps {
  url: string;
  className?: string;
}

export const ProjectQrCode: React.FC<ProjectQrCodeProps> = ({ url, className = '' }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const targetUrl = url?.trim() || 'https://letruongconghieu.click/';

    QRCode.toString(targetUrl, {
      type: 'svg',
      margin: 0,
      color: {
        dark: '#0a0a0a',
        light: '#00000000', // Transparent so it blends with the colored card
      },
      errorCorrectionLevel: 'M',
    })
      .then((svg) => {
        setSvgContent(svg);
      })
      .catch((err) => {
        console.error('Failed to generate scannable QR code:', err);
      });
  }, [url]);

  if (!svgContent) {
    return (
      <div
        className={`w-full h-full aspect-square bg-neutral-900/10 rounded animate-pulse ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full h-full flex items-center justify-center select-none [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      title={`Quét mã QR để mở website demo: ${url}`}
    />
  );
};
