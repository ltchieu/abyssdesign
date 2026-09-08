import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aetheria-nexus',
    title: 'Aetheria Nexus',
    category: 'Kiến Trúc Phần Mềm & Kỹ Sư Hệ Thống (Software Architect)',
    badge: 'Deep Tech & Architecture',
    tagline: 'Kiến trúc hệ thống phân tán, xử lý hàng triệu bản ghi và tối ưu phản hồi micro-second với giao diện WebGL tương tác toạ độ 3D.',
    iconType: 'developer',
    client: 'Lê Trường Công Hiếu — Lead Architect & Fullstack Engineer',
    year: '2024 — 2026',
    role: 'System Architecture & High-Performance Fullstack',
    duration: '4 Tuần',
    accentColor: '#0284c7',
    previewType: 'developer',
    stats: [
      { label: 'Tốc độ phản hồi trang', value: '< 12ms' },
      { label: 'Điểm Lighthouse Google', value: '100/100' },
      { label: 'Tỷ lệ offer Tech Lead', value: '+320%' }
    ],
    overview: 'Aetheria Nexus là mẫu portfolio đỉnh cao dành riêng cho Lập trình viên cao cấp, Tech Lead và Solution Architect. Thay vì chỉ hiển thị CV tĩnh, trang web mô phỏng trực quan kiến trúc microservices phân tán, bảng phân tích hiệu năng thời gian thực và tích hợp terminal tương tác 3D WebGL.',
    highlights: [
      'Sơ đồ phân rã kiến trúc Microservices phân tán với Zero-Trust Security',
      'Đo lường thời gian thực: Lighthouse Performance 100/100, TTFB < 50ms',
      'Tích hợp Code Sandbox & Terminal mô phỏng kiểm thử API tức thì',
      'Bộ sưu tập 6 dự án thực chiến: Quản lý chuỗi cung ứng, Realtime Chat Gateway, Admin Dashboard'
    ],
    deliverables: [
      'Giao diện Portfolio chuẩn WebGL 3D Matrix tương tác mượt mà',
      'Hệ thống trưng bày mã nguồn GitHub và Live Demo nhúng trực tiếp',
      'Bảng điều khiển chỉ số hiệu năng (Core Web Vitals & Latency Benchmark)',
      'Tối ưu chuẩn SEO Developer & cấu trúc dữ liệu Schema.org'
    ],
    technologies: ['Java 17', 'Spring Boot 3.x', 'React 19', 'TypeScript', 'Tailwind CSS', 'WebGL', 'Docker', 'PostgreSQL'],
    demoUrl: 'https://letruongconghieu.click/',
    githubUrl: 'https://github.com/ltconghieu',
    systemMetrics: [
      { label: 'Core Web Vitals', value: '100/100', desc: 'Đạt điểm tuyệt đối Google PageSpeed' },
      { label: 'Server Latency', value: '< 12ms', desc: 'Tối ưu hoá bộ nhớ đệm đa tầng Redis' },
      { label: 'Throughput', value: '10,000+ RPS', desc: 'Khả năng chịu tải đồng thời cao' },
      { label: 'Type Safety', value: '100% Strict', desc: 'TypeScript & Spring Data Validation' }
    ],
    architectureNodes: [
      { step: 'Edge Layer', detail: 'Cloudflare CDN & Global Anycast DNS Routing' },
      { step: 'Gateway & Auth', detail: 'Spring Cloud Gateway, JWT stateless & Rate Limiter' },
      { step: 'Core Services', detail: 'Spring Boot 3.x Microservices & WebSocket Engine' },
      { step: 'Data & Cache', detail: 'PostgreSQL Distributed Cluster + Redis Multi-tier Cache' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        title: 'Bản đồ kiến trúc vi dịch vụ & Luồng dữ liệu phân tán',
        tag: 'System Architecture'
      },
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        title: 'Giao diện quản trị Admin & Đo lường tài nguyên thời gian thực',
        tag: 'Dashboard Matrix'
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        title: 'Tích hợp Terminal tương tác & Phân tích truy vấn cơ sở dữ liệu',
        tag: 'Terminal Engine'
      }
    ]
  },
  {
    id: 'lumina-pulse',
    title: 'Lumina Pulse',
    category: 'Chiến Dịch Truyền Thông & Sự Kiện (Brand & Event Activations)',
    badge: 'Interactive Physics & Campaign Story',
    tagline: 'Không gian trưng bày chiến dịch đa kênh với tương tác thẻ bài vật lý đa chiều, kể câu chuyện đại nhạc hội và dự án cộng đồng quy mô 85.000+ người.',
    iconType: 'marketing',
    client: 'Minh Khánh (Mia Nguyen) — Brand Marketing & Communications',
    year: '2024 — 2026',
    role: 'Brand Experience & Event Activation Direction',
    duration: '5 Tuần',
    accentColor: '#8b5cf6',
    previewType: 'marketing',
    stats: [
      { label: 'Lượt tiếp cận truyền thông', value: '2.4M+' },
      { label: 'Tỷ lệ chốt tài trợ sự kiện', value: '94%' },
      { label: 'Người tham dự thực tế', value: '85,000+' }
    ],
    overview: 'Lumina Pulse tái định nghĩa cách các Chuyên gia Marketing và Giám đốc Sự kiện trình diễn thành tựu. Ứng dụng công nghệ thẻ bài vật lý tương tác (Physics Card Stack & BounceCards), người xem có thể kéo, thả, lướt qua các ấn phẩm visual, video trailer và số liệu chiến dịch sống động như đang xem triển lãm thực tế.',
    highlights: [
      'Trải nghiệm thẻ bài vật lý (Draggable Stack & Physics Bounce) tương tác mượt mà',
      'Hồ sơ chiến dịch The Phoenix Music Festival: Visual Identity, VIP Wristbands, 1x2m Standees',
      'Dự án cộng đồng Xuân Tình Nguyện & Saigon Lưu Lạc Ký: Triển lãm và phim tư liệu',
      'Đo lường hiệu quả chuyển đổi truyền thông (Reach, Engagement, Sponsor Conversion)'
    ],
    deliverables: [
      'Giao diện Portfolio tương tác vật lý (Interactive Dynamic Card Deck)',
      'Hệ thống phân trang Case Study đa phương tiện (Video, Phóng sự ảnh, Báo cáo số liệu)',
      'Thư viện ấn phẩm truyền thông phân giải cao',
      'Tích hợp Zalo & LinkedIn kết nối nhanh cho các đối tác tài trợ'
    ],
    technologies: ['React 19', 'Tailwind CSS', 'Framer Motion', 'Physics Springs', 'TypeScript', 'Vite'],
    demoUrl: 'https://portfolio-minhkhanh.vercel.app/',
    systemMetrics: [
      { label: 'Campaign Reach', value: '2.4M+', desc: 'Tổng số lượt xem đa kênh số' },
      { label: 'Event Attendees', value: '85k+', desc: 'Lượng khán giả tham gia sự kiện' },
      { label: 'Brand Conversion', value: '+78%', desc: 'Tăng trưởng nhận diện thương hiệu' },
      { label: 'Sponsorship Rate', value: '94%', desc: 'Tỷ lệ hoàn thành mục tiêu tài trợ' }
    ],
    architectureNodes: [
      { step: 'Brand Concept', detail: 'Nghiên cứu thị trường mục tiêu & Định vị linh hồn sự kiện' },
      { step: 'Visual Production', detail: 'Sáng tạo hệ thống Key Visual, Poster, Standee, VIP Pass' },
      { step: 'Omnichannel Push', detail: 'Chiến dịch lan toả mạng xã hội, báo chí & KOC Network' },
      { step: 'Post-Event Impact', detail: 'Đo lường ROI, báo cáo số liệu và chuyển đổi tài trợ' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
        title: 'The Phoenix Music Festival — Sân khấu & Hệ thống nhận diện thị giác',
        tag: 'Music Activation'
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        title: 'Triển lãm cộng đồng & Chiến dịch lan toả giá trị nhân văn',
        tag: 'Community Outreach'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
        title: 'Bộ ấn phẩm truyền thông VIP, vé điện tử & tài liệu tài trợ',
        tag: 'Media Identity'
      }
    ]
  },
  {
    id: 'maison-art',
    title: "Maison De L'Art",
    category: 'Giám Đốc Nghệ Thuật & Thời Trang (Art Direction & Haute Couture)',
    badge: 'Haute Couture & Editorial Strategy',
    tagline: 'Ngôn ngữ thị giác thời trang xa xỉ, nghệ thuật typography Avant-Garde và các case study chiến dịch toàn cầu đạt chuẩn tạp chí quốc tế.',
    iconType: 'creative',
    client: 'Hoàng Lê Phương Dung — Creative Advertising & Fashion Visuals',
    year: '2024 — 2026',
    role: 'Creative Director & Fashion Art Strategist',
    duration: '4 Tuần',
    accentColor: '#ec4899',
    previewType: 'creative-director',
    stats: [
      { label: 'Giá trị hợp đồng Retainer', value: '+450%' },
      { label: 'Ấn phẩm quốc tế xuất bản', value: '14 Tạp Chí' },
      { label: 'Đánh giá hài lòng thương hiệu', value: '100%' }
    ],
    overview: "Maison De L'Art được thiết kế cho các Giám đốc Nghệ thuật, Fashion Stylist và Creative Lead cao cấp. Bố cục phá vỡ sự nhàm chán của web truyền thống bằng phong cách Tạp chí Nghệ thuật (High-Fashion Editorial), kết hợp typography tương phản cao, badge cá tính và case study toàn cầu với các đối tác lớn như LEGO, RMIT Studio, Choices Flooring.",
    highlights: [
      'Bố cục Tạp chí Nghệ thuật High-End với nghệ thuật Typography Avant-Garde',
      'Bộ sưu tập Case Studies thương hiệu: LEGO, Choices Flooring, Who Gives A Crap',
      'Dự án Fashion Visuals cho các nhãn hàng thời trang độc lập nội địa & quốc tế',
      'Chứng thực uy tín thông qua bảo chứng khách hàng và các giải thưởng sáng tạo'
    ],
    deliverables: [
      'Giao diện Portfolio phong cách Editorial Luxury tương thích hoàn hảo thiết bị',
      'Hệ thống trưng bày Lookbook thời trang & TVC phân giải cực cao',
      'Thư viện hồ sơ năng lực (Media Kit & Press Kit) tải nhanh một chạm',
      'Định vị thương hiệu cá nhân đẳng cấp Giám đốc Sáng tạo quốc tế'
    ],
    technologies: ['React 19', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite', 'Editorial Tokens'],
    demoUrl: 'https://port-hoang-le-phuong-dung.vercel.app/',
    systemMetrics: [
      { label: 'Global Brands', value: '12+ Brands', desc: 'Hợp tác cùng LEGO, RMIT, Choices Flooring' },
      { label: 'Editorial Features', value: '14 Issues', desc: 'Xuất hiện trên các tạp chí thời trang uy tín' },
      { label: 'Campaign ROI', value: '3.8x', desc: 'Hiệu quả gia tăng doanh số chiến dịch' },
      { label: 'Visual Precision', value: 'Pixel Perfect', desc: 'Tỷ lệ bố cục vàng theo tiêu chuẩn in ấn' }
    ],
    architectureNodes: [
      { step: 'Creative Brief', detail: 'Khám phá ADN thương hiệu & Định hướng nghệ thuật cốt lõi' },
      { step: 'Moodboard & Stylism', detail: 'Xây dựng bảng màu, chất liệu và phong cách ánh sáng' },
      { step: 'Production Shooting', detail: 'Chỉ đạo nghệ thuật buổi chụp Lookbook & TVC thời trang' },
      { step: 'Editorial Layout', detail: 'Thiết kế bố cục ấn phẩm, Catalogue & Chiến dịch Digital' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
        title: 'Haute Couture Editorial — Nghệ thuật ánh sáng & Bố cục không gian',
        tag: 'Fashion Editorial'
      },
      {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
        title: 'Chiến dịch nhận diện thương hiệu cho Local Independent Labels',
        tag: 'Brand Campaign'
      },
      {
        url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
        title: 'Bộ sưu tập Lookbook thời trang phong cách Avant-Garde đương đại',
        tag: 'Lookbook Gallery'
      }
    ]
  },
  {
    id: 'voxel-spatial',
    title: 'Voxel Vanguard',
    category: 'Kiến Trúc Không Gian & Tính Toán 3D (Spatial Architecture)',
    badge: 'Parametric & Spatial Computing',
    tagline: 'Bản vẽ kiến trúc kỹ thuật Vector 3D tương tác, phô diễn kết cấu Brutalism nguyên khối và không gian nội thất đương đại.',
    iconType: 'architect',
    client: 'Studio Kiến Trúc Hoàng Vũ & Partners',
    year: '2024 — 2026',
    role: 'Spatial Computing & Architecture Showcase',
    duration: '5 Tuần',
    accentColor: '#0f172a',
    previewType: 'architect',
    stats: [
      { label: 'Thời gian tương tác trang', value: '5m 24s' },
      { label: 'Độ chuẩn xác bản vẽ 3D', value: '100% Vector' },
      { label: 'Hợp đồng kiến trúc cao cấp', value: '+55%' }
    ],
    overview: 'Voxel Vanguard là biểu tượng cho dòng portfolio Kiến trúc sư và Thiết kế nội thất đương đại. Với phong cách Brutalism tối giản kết hợp mô hình không gian tương tác, mọi công trình kiến trúc đều được làm nổi bật thông qua các góc nhìn mặt cắt 3D, vật liệu ánh sáng chân thực và thông số kết cấu chính xác.',
    highlights: [
      'Giao diện bản vẽ kỹ thuật phân giải cao không vỡ nét (Vector Blueprint)',
      'Chế độ xem mặt cắt công trình đa chiều với tỷ lệ không gian thực',
      'Thư viện vật liệu kiến trúc (Bê tông nguyên khối, Kính cường lực, Gỗ tự nhiên)',
      'Hệ thống quản lý dự án công trình trực quan phân tầng theo tiến độ'
    ],
    deliverables: [
      'Portfolio kiến trúc 3D không gian tương tác cao',
      'Bộ tài liệu hồ sơ năng lực số dành cho các dự án bất động sản hạng sang',
      'Tối ưu hóa hiển thị mượt mà trên iPad Pro và màn hình 4K',
      'Hệ thống liên hệ đặt lịch khảo sát công trình tự động'
    ],
    technologies: ['React 19', 'Tailwind CSS', 'Three.js', 'WebGL', 'TypeScript', 'Vite'],
    demoUrl: 'https://letruongconghieu.click/',
    systemMetrics: [
      { label: 'Blueprint Precision', value: '0.01mm', desc: 'Độ chuẩn xác hiển thị bản vẽ CAD' },
      { label: 'Rendering Frame', value: '60 FPS', desc: 'Trải nghiệm không gian mượt mà' },
      { label: 'Client Engagement', value: '5m 24s', desc: 'Thời lượng xem chi tiết dự án' },
      { label: 'Contract Conversion', value: '+55%', desc: 'Tăng trưởng tỷ lệ ký kết dự án lớn' }
    ],
    architectureNodes: [
      { step: 'Site Survey', detail: 'Khảo sát địa hình, hướng nắng & cảnh quan sinh thái' },
      { step: 'Spatial Concept', detail: 'Phác thảo khối Brutalism & Phân bổ công năng không gian' },
      { step: '3D Simulation', detail: 'Mô phỏng ánh sáng, gió tự nhiên & Vật liệu chịu lực' },
      { step: 'Blueprint Handover', detail: 'Hoàn thiện hồ sơ kỹ thuật thi công & Giám sát thực tế' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        title: 'Biệt thự nghỉ dưỡng phong cách Brutalism tối giản ven biển',
        tag: 'Spatial Villa'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        title: 'Không gian nội thất thông tầng với ánh sáng tự nhiên đa góc độ',
        tag: 'Interior Spatial'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
        title: 'Bản vẽ kỹ thuật mặt cắt không gian & Sơ đồ vật liệu kết cấu',
        tag: 'Technical Plan'
      }
    ]
  }
];

