import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'letruongconghieu-nexus',
    title: 'Lê Trương Công Hiếu',
    category: 'Kỹ Sư Phần Mềm & Lập Trình Viên Backend',
    badge: 'Backend & High-Performance Systems',
    tagline: 'Thiết kế kiến trúc máy chủ chịu tải cao, tối ưu hóa cơ sở dữ liệu và xây dựng hệ sinh thái RESTful microservices với Java Spring Boot & .NET.',
    iconType: 'developer',
    client: 'Lê Trương Công Hiếu — Software Developer',
    year: '2024 — 2026',
    role: 'Software Engineer & Backend Architecture',
    duration: '4 Tuần',
    accentColor: '#38bdf8',
    previewType: 'developer',
    avatarUrl: '/images/projects/hieu-hero.png',
    stats: [
      { label: 'Điểm GPA Đại Học', value: '3.46 / 4.0' },
      { label: 'Học Bổng Học Thuật', value: '4 Học Kỳ' },
      { label: 'Đóng Góp GitHub', value: '74+ Commit' }
    ],
    overview: 'Portfolio kỹ sư phần mềm của Lê Trương Công Hiếu tập trung vào chiều sâu kỹ thuật (deep tech), phô diễn năng lực xây dựng các hệ sinh thái dịch vụ phụ trợ (backend), cơ sở dữ liệu phân tán và ứng dụng tương tác thời gian thực. Được trang bị thiết kế tối giản, công nghệ hiển thị chỉ số benchmark trực tiếp và trải nghiệm terminal tương tác.',
    highlights: [
      'Hệ Thống Quản Lý Tôm Giống: Chuỗi cung ứng & quản lý tồn kho với Java 17, Spring Boot 3.x, Spring Security & JWT, SQL Server (JPA/Hibernate)',
      'Quản Lý Trung Tâm Ngoại Ngữ: Hệ thống kép gồm Admin Dashboard (Material UI) và Portal Học Viên (Tailwind CSS, React, TypeScript)',
      'Realtime Chat App: Giao thức WebSocket 2 chiều với Java, Socket.io và Node.js',
      'Nghiên cứu kiến trúc phát sóng IP & Smart City IoT trên thiết bị L300 4G/WiFi tại Sài Gòn Lab'
    ],
    deliverables: [
      'Giao diện Portfolio chuẩn tương tác High-Performance WebGL & Motion',
      'Hệ thống trưng bày các dự án thực chiến tích hợp Demo & GitHub Links',
      'Bảng đo lường kỹ năng Tech Stack phân tầng (Backend, Frontend, Cloud)',
      'Tối ưu hóa thời gian tải trang đạt chuẩn Core Web Vitals tuyệt đối'
    ],
    technologies: ['Java 17', 'Spring Boot 3.x', 'C# / ASP.NET', 'SQL Server', 'MongoDB', 'React', 'TypeScript', 'Docker', 'AWS'],
    demoUrl: 'https://letruongconghieu.click/',
    githubUrl: 'https://github.com/ltconghieu',
    systemMetrics: [
      { label: 'Core Web Vitals', value: '100/100', desc: 'Đạt điểm chuẩn tối ưu tuyệt đối PageSpeed' },
      { label: 'API Response', value: '< 20ms', desc: 'Tối ưu truy vấn SQL Server & Hibernate cache' },
      { label: 'Architecture', value: 'Microservices', desc: 'Spring Boot Gateway, JWT stateless auth' },
      { label: 'Academic Standing', value: 'Top Honor', desc: '4 kỳ liên tiếp đạt học bổng học tập HUIT' }
    ],
    architectureNodes: [
      { step: 'Edge & Client', detail: 'React 19, TypeScript, Axios client & Cloudflare CDN' },
      { step: 'Security & Auth', detail: 'Spring Security 6, Stateless JWT Token & Role-based Auth' },
      { step: 'Service Core', detail: 'Spring Boot 3.x REST Services, MapStruct DTO & Lombok' },
      { step: 'Data & Persistence', detail: 'SQL Server distributed cluster + JPA Hibernate queries' }
    ],
    galleryImages: [
      {
        url: '/images/projects/hieu-detail-1.png',
        title: 'Giao Diện Không Gian 3D Tương Tác — Định Danh Developer',
        tag: '3D Space Hero'
      },
      {
        url: '/images/projects/hieu-detail-2.png',
        title: 'Dự Án Thực Chiến — Hệ Thống Quản Lý Tôm Giống & Trung Tâm Ngoại Ngữ',
        tag: 'Production Applications'
      },
      {
        url: '/images/projects/hieu-detail-3.png',
        title: 'Học Thuật & Kinh Nghiệm — Sài Gòn Lab & Học Bổng Xuất Sắc HUIT',
        tag: 'Career & Education'
      }
    ]
  },
  {
    id: 'minhkhanh-marcom',
    title: 'Nguyễn Hà Minh Khánh',
    category: 'Truyền Thông Thương Hiệu & Sự Kiện (MarCom & PR)',
    badge: 'Brand PR & Campus Media',
    tagline: 'Chiến lược truyền thông tích hợp, sản xuất phim ngắn nghệ thuật và điều phối sự kiện quy mô lớn với kinh nghiệm tại các tập đoàn nghỉ dưỡng và đại học quốc tế.',
    iconType: 'marketing',
    client: 'Nguyễn Hà Minh Khánh (Mia Nguyen) — MarCom Specialist',
    year: '2024 — 2026',
    role: 'Brand Communications & Event Coordinator',
    duration: '4 Tuần',
    accentColor: '#c084fc',
    previewType: 'marketing',
    avatarUrl: '/images/projects/khanh-hero.png',
    stats: [
      { label: 'Học Bổng Thạc Sĩ UK', value: '£6,000' },
      { label: 'Chứng Chỉ Ngoại Ngữ', value: 'IELTS B2' },
      { label: 'Kinh Nghiệm MarCom', value: '4+ Năm' }
    ],
    overview: 'Portfolio MarCom & PR của Nguyễn Hà Minh Khánh (Mia Nguyen) làm nổi bật câu chuyện phát triển sự nghiệp từ đại diện Hội sinh viên đến chuyên viên truyền thông chuyên nghiệp. Kết hợp trải nghiệm xem video ngắn tương tác, hồ sơ học bổng quốc tế và các dự án sản xuất nội dung nghệ thuật ấn tượng.',
    highlights: [
      'Sản xuất phim ngắn nghệ thuật The Shadow (Dream Club) — Biên kịch & chỉ đạo teaser điện ảnh',
      'Chiến dịch truyền thông số Lễ tốt nghiệp HCMCOU 2025: Chuỗi 3 video reel hướng dẫn và nhắc lịch',
      'Đạt vòng phỏng vấn Học bổng Xuất sắc Sau đại học Đông Nam Á trị giá £6,000 tại University of South Wales (UK)',
      'Kinh nghiệm điều phối truyền thông tại Amor Resort | Protea Garden | Aqua Jardin và OU News'
    ],
    deliverables: [
      'Giao diện Portfolio phong cách Modern Manifesto với tương tác mượt mà',
      'Showcase đa phương tiện tích hợp video reel mạng xã hội và phóng sự ảnh',
      'Bộ hồ sơ năng lực & chứng chỉ kiểm định quốc tế (IELTS, RBL Marketing, SIYLI)',
      'Tối ưu hóa đa kênh kết nối trực tiếp qua Zalo, LinkedIn và Email'
    ],
    technologies: ['Brand Strategy', 'Public Relations', 'Video Reel Production', 'Content Strategy', 'Event Marketing', 'AI Tools'],
    demoUrl: 'https://portfolio-minhkhanh.vercel.app/',
    systemMetrics: [
      { label: 'Academic Honor', value: '£6,000 Award', desc: 'Học bổng Xuất sắc Thạc sĩ University of South Wales' },
      { label: 'Media Production', value: '5+ Video Reels', desc: 'Phim ngắn The Shadow & Campus Media HCMCOU' },
      { label: 'English Proficiency', value: 'IELTS Academic', desc: 'B2 Academic Proficiency do IDP / Cambridge cấp' },
      { label: 'Leadership', value: 'Vice Chairman', desc: 'Phó Ban Liên lạc Hội Sinh viên SAS - HCMCOU' }
    ],
    architectureNodes: [
      { step: 'Insight & Strategy', detail: 'Phân tích mục tiêu doanh nghiệp & Định vị thông điệp truyền thông' },
      { step: 'Creative Production', detail: 'Biên kịch, quay dựng video ngắn & Thiết kế ấn phẩm sự kiện' },
      { step: 'Omnichannel MarCom', detail: 'Lan tỏa đa kênh mạng xã hội, thông cáo báo chí & KOC' },
      { step: 'Evaluation & Stakeholders', detail: 'Đo lường tương tác, báo cáo chỉ số và kết nối đối tác' }
    ],
    galleryImages: [
      {
        url: '/images/projects/khanh-detail-1.png',
        title: 'Editorial Manifesto — Nhận Diện & Định Vị Thương Hiệu Mia Nguyen',
        tag: 'Brand & MarCom Hero'
      },
      {
        url: '/images/projects/khanh-detail-2.png',
        title: 'Selected Works — Sản Xuất Phim Ngắn Điện Ảnh The Shadow',
        tag: 'Creative Film Production'
      },
      {
        url: '/images/projects/khanh-detail-3.png',
        title: 'Bảng Thành Tích & Chứng Chỉ — Học Bổng £6,000 UK & IELTS Academic',
        tag: 'Honors & Distinctions'
      }
    ]
  },
  {
    id: 'phuongdung-art',
    title: 'Hoàng Lê Phương Dung',
    category: 'Giám Đốc Nghệ Thuật & Quảng Cáo Sáng Tạo (Art Direction)',
    badge: 'Art Direction & Lifestyle Branding',
    tagline: 'Kể chuyện bằng hình ảnh, chỉ đạo nghệ thuật thời trang và xây dựng thương hiệu phong cách sống cao cấp với tinh thần Avant-Garde.',
    iconType: 'creative',
    client: 'Hoàng Lê Phương Dung (Olivia Hoang) — Art Director',
    year: '2024 — 2026',
    role: 'Art Director & Strategic Storyteller',
    duration: '4 Tuần',
    accentColor: '#f472b6',
    previewType: 'creative-director',
    avatarUrl: '/images/projects/dung-hero.png',
    stats: [
      { label: 'Tỷ Lệ Mua Lại Carne', value: '2-3 Tháng/Lần' },
      { label: 'Điểm Đồ Án RMIT', value: '91% HD' },
      { label: 'Chiến Dịch Toàn Cầu', value: '12+ Dự Án' }
    ],
    overview: 'Portfolio nghệ thuật đỉnh cao của Hoàng Lê Phương Dung (Olivia Hoang) - cử nhân Truyền thông Chuyên nghiệp (Quảng cáo) tại RMIT University và Nhà sáng lập kiêm Giám đốc Nghệ thuật của thương hiệu phong cách sống Carne Gemstone. Trang web kết hợp phong cách tạp chí nghệ thuật (Editorial Lookbook), tương phản typography mạnh mẽ và các case study thương hiệu lớn.',
    highlights: [
      'Sáng lập & Art Director thương hiệu CARNE GEMSTONE: Xây dựng nhận diện, bao bì, chuyển đổi 371 followers thành khách hàng mua lặp lại',
      'Chiến dịch sáng tạo thương hiệu toàn cầu: LEGO (Build the World You Imagine), Choices Flooring (Room to Live), Who Gives A Crap',
      'Đồ án RMIT xuất sắc: 91% HD TV & Screen Culture, 87% HD RMIT Library Transnational Student Experience Project',
      'Chỉ đạo nghệ thuật Lookbook thời trang cho các Local Independent Labels nội địa'
    ],
    deliverables: [
      'Giao diện Portfolio phong cách High-Fashion Editorial sang trọng, duy mỹ',
      'Hệ thống phân trang Case Study với Lookbook chất lượng cao và Rationale thiết kế',
      'Showcase thương hiệu khởi nghiệp (Startup Showcase) kèm dữ liệu tăng trưởng',
      'Chứng chỉ chuyên môn quốc tế HubSpot Social Media Marketing Certification'
    ],
    technologies: ['Art Direction', 'Visual Storytelling', 'Adobe Creative Cloud', 'Lookbook Curation', 'Set Architecture', 'Brand Identity'],
    demoUrl: 'https://port-hoang-le-phuong-dung.vercel.app/',
    systemMetrics: [
      { label: 'Startup Growth', value: '371 Loyal Buyers', desc: 'Chuyển đổi follower thành khách hàng thân thiết' },
      { label: 'Academic Distinction', value: '91% High Distinction', desc: 'Điểm xuất sắc cao nhất chuyên ngành RMIT' },
      { label: 'Global Brands', value: 'LEGO, Choices Flooring', desc: 'Chiến dịch thương hiệu quốc tế tiêu biểu' },
      { label: 'Social Certification', value: 'HubSpot Academy', desc: 'Social Media Marketing Certification' }
    ],
    architectureNodes: [
      { step: 'Creative Brief', detail: 'Nghiên cứu tâm lý người tiêu dùng & Định vị ADN thương hiệu' },
      { step: 'Visual Direction & Set', detail: 'Xây dựng Moodboard, Concept ánh sáng & Kiến trúc bối cảnh' },
      { step: 'Shoot Production', detail: 'Chỉ đạo nghệ thuật chụp Lookbook, TVC & Commercial Photography' },
      { step: 'Campaign Rollout', detail: 'Thiết kế bố cục Editorial, Social Assets & Đánh giá chuyển đổi' }
    ],
    galleryImages: [
      {
        url: '/images/projects/dung-detail-1.png',
        title: 'High-Fashion Editorial Portfolio — Chân Dung & Nhận Diện Olivia Hoang',
        tag: 'Art Direction Hero'
      },
      {
        url: '/images/projects/dung-detail-2.png',
        title: 'Selected Projects — Chiến Dịch LEGO, Marketer Contest & RMIT Pride',
        tag: 'Creative Campaigns'
      },
      {
        url: '/images/projects/dung-detail-3.png',
        title: 'Startup & Brand Building — Thương Hiệu Phong Cách Sống Carne Gemstone',
        tag: 'Brand Identity & Visuals'
      }
    ]
  },
  {
    id: 'vananh-strategy',
    title: 'Võ Lê Vân Anh',
    category: 'Chiến Lược Thương Hiệu & Marketing Executive',
    badge: 'Brand Planning & Growth Marketing',
    tagline: 'Xây dựng chiến lược thương hiệu dựa trên Consumer Insights, dẫn dắt tăng trưởng TikTok triệu view và điều phối dự án bao bì xuất khẩu quốc tế.',
    iconType: 'executive',
    client: 'Võ Lê Vân Anh (Van Anh) — Marketing Executive',
    year: '2024 — 2026',
    role: 'Brand Planner & Marketing Executive',
    duration: '4 Tuần',
    accentColor: '#fbbf24',
    previewType: 'executive',
    avatarUrl: '/images/projects/vananh-hero.png',
    stats: [
      { label: 'Tăng Trưởng TikTok H&L', value: '+468% Reach' },
      { label: 'Video Viral Highlands', value: '1.4M Views' },
      { label: 'Chứng Chỉ Ngoại Ngữ', value: 'TOEIC 830' }
    ],
    overview: 'Portfolio chuyên gia Marketing Executive & Brand Planner của Võ Lê Vân Anh (Học viên Thạc sĩ Marketing Ứng dụng tại Đại học UEH). Điểm nhấn là năng lực kết nối nhạy bén giữa nghiên cứu hành vi khách hàng và thực thi đa kênh: từ tăng trưởng bùng nổ kênh TikTok cho chuỗi F&B và Highlands Coffee, chiến dịch Influencer cho Maybelline tại Brainad Agency, đến điều phối sản xuất bao bì chuẩn ISO cho khách hàng toàn cầu tại Toàn Phát.',
    highlights: [
      'H&L Concept: Dẫn dắt MarCom & Trade Marketing cho Men Quán và Renge Ramen, tăng +468.36% reach (162K users) và +304.33% views (185K views) trong 12 tuần',
      'Highlands Coffee: Quản trị kênh TikTok, video viral đạt 1.4 triệu views, tăng trưởng +12.73% follower và +317% lượt chia sẻ',
      'Toàn Phát Packaging: Điều phối dự án cho khách hàng toàn cầu FengTay (Taiwan), EMSV (USA), QuickPack (Germany), HoyaLens (Japan), chuẩn ISO 14001:2015',
      'Brainad Agency: Lập kế hoạch & thực thi chiến dịch KOL/KOC cho Maybelline New York, Modern Concert 2024 x Hakuhodo, Crocs',
      'Đạt Giải B Nghiên cứu khoa học cấp Trường tại UEH (2 đề tài về Hành vi tiêu dùng thực tế ảo & Stress Gen Z)',
      'Chiến dịch Tết #NétMớiLook cho HMK Eyewear & TVC Mậu Thân 1968 lọt Top 20 Vòng 3 Bảo tàng Lịch sử TP.HCM'
    ],
    deliverables: [
      'Giao diện Portfolio tương tác trẻ trung, hiện đại chuẩn Agency',
      'Báo cáo phân tích số liệu tăng trưởng tương tác thực tế (TikTok Analytics Matrix)',
      'Sơ đồ quy trình sản xuất bao bì công nghiệp (Design → Sampling → Production → QA)',
      'Showcase chiến dịch Influencer Marketing tích hợp Key Visuals và Video Reels'
    ],
    technologies: ['Brand Strategy', 'Influencer Marketing', 'TikTok Growth Engine', 'Trade Marketing', 'Consumer Insights', 'Packaging R&D', 'Campaign Execution'],
    demoUrl: 'https://itsvananh.vercel.app/',
    systemMetrics: [
      { label: 'TikTok Reach', value: '+468.36%', desc: 'Tăng trưởng tiếp cận 162K người dùng H&L' },
      { label: 'Viral Peak', value: '1.4M Views', desc: 'Kỷ lục video viral kênh Highlands Coffee' },
      { label: 'Global Clients', value: '4 Quốc Gia', desc: 'Bao bì xuất khẩu Mỹ, Đức, Nhật, Đài Loan' },
      { label: 'Academic Prize', value: 'Giải B NCKH', desc: '2 đề tài đoạt giải Nghiên cứu khoa học UEH' }
    ],
    architectureNodes: [
      { step: 'Consumer Insight', detail: 'Nghiên cứu hành vi người tiêu dùng, dữ liệu tâm lý & giải mã động cơ mua' },
      { step: 'Strategy & Concept', detail: 'Xây dựng thông điệp chủ đạo (Big Idea) & kế hoạch truyền thông tích hợp IMC' },
      { step: 'Execution & Growth', detail: 'Sản xuất nội dung ngắn TikTok/Reels, điều phối KOL/KOC & kích hoạt điểm bán' },
      { step: 'Data & R&D Scaling', detail: 'Đo lường hiệu quả chuyển đổi (Reach/Engagement), QA sản xuất bao bì chuẩn ISO' }
    ],
    galleryImages: [
      {
        url: '/images/projects/vananh-detail-1.png',
        title: 'Executive Portfolio Hero — Marketing Executive 2024-2026',
        tag: 'Brand Planning Hero'
      },
      {
        url: '/images/projects/vananh-detail-2.png',
        title: 'Highlands Coffee TikTok Journey — Tăng Trưởng Triệu View & Follower',
        tag: 'TikTok Growth Engine'
      },
      {
        url: '/images/projects/vananh-detail-3.png',
        title: 'Brainad Agency — Chiến Dịch Maybelline New York & Modern Concert',
        tag: 'Influencer & IMC Campaigns'
      }
    ]
  }
];
