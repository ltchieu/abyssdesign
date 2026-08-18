import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aura-creative',
    title: 'Aura Portfolio',
    category: 'Portfolio Giám Đốc Sáng Tạo',
    tagline: 'Không gian trưng bày các tác phẩm nghệ thuật kỹ thuật số và định vị thương hiệu cá nhân với hiệu ứng chuyển cảnh mượt mà.',
    iconType: 'creative',
    client: 'Minh Trí — Creative Director & Brand Strategist',
    year: '2024',
    role: 'Thiết Kế Trải Nghiệm & Lập Trình Giao Diện',
    duration: '4 Tuần',
    stats: [
      { label: 'Tỷ lệ liên hệ hợp tác', value: '+64%' },
      { label: 'Tốc độ phản hồi trang', value: '< 15ms' },
      { label: 'Giải thưởng thiết kế', value: 'Site of the Day' }
    ],
    overview: 'Aura là dự án portfolio độc bản được thiết kế riêng cho một Creative Director hàng đầu. Trọng tâm của dự án là loại bỏ mọi chi tiết thừa, tôn vinh hình ảnh tác phẩm thông qua nghệ thuật sắp đặt typography tương phản cao và hiệu ứng lướt tương tác điện ảnh.',
    deliverables: [
      'Bộ hệ thống thiết kế Figma hoàn chỉnh với Design Tokens',
      'Mã nguồn React & Tailwind CSS tương tác mượt mà',
      'Hệ thống trưng bày dự án và chứng chỉ tương tác',
      'Tối ưu hóa SEO thương hiệu cá nhân đạt chuẩn Top 1 Google'
    ],
    technologies: ['React 19', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite'],
    colorTheme: '#2563eb',
    previewType: 'creative-director'
  },
  {
    id: 'monolith-architect',
    title: 'Monolith Spatial',
    category: 'Portfolio Kiến Trúc & Nội Thất',
    tagline: 'Portfolio phong cách tối giản nguyên khối dành cho kiến trúc sư, làm nổi bật kết cấu không gian và bản vẽ kỹ thuật.',
    iconType: 'architect',
    client: 'Studio Kiến Trúc Hoàng Vũ',
    year: '2024',
    role: 'Chiến Lược Thương Hiệu & Kiến Trúc Thông Tin',
    duration: '5 Tuần',
    stats: [
      { label: 'Thời gian dừng chân của khách', value: '4m 18s' },
      { label: 'Tốc độ tải trang Lighthouse', value: '100/100' },
      { label: 'Tỷ lệ chốt hợp đồng lớn', value: '+42%' }
    ],
    overview: 'Monolith được định hình theo trường phái Brutalism tối giản đương đại. Bố cục dạng lưới toán học giúp làm nổi bật từng công trình kiến trúc qua các thước phim ảnh chất lượng cao và sơ đồ mặt cắt động.',
    deliverables: [
      'Giao diện thư viện công trình kiến trúc tương tác cao',
      'Chế độ xem bản vẽ kỹ thuật phân giải cao không vỡ nét',
      'Hệ thống quản lý nội dung dự án trực quan',
      'Tương thích hoàn hảo mọi thiết bị di động và tablet'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Figma', 'TypeScript', 'WebGL'],
    colorTheme: '#0f172a',
    previewType: 'architect'
  },
  {
    id: 'nexus-executive',
    title: 'Nexus Executive',
    category: 'Portfolio Lãnh Đạo Cấp Cao & Chuyên Gia',
    tagline: 'Portfolio định vị cá nhân cho Nhà sáng lập và C-Level, truyền tải tầm nhìn lãnh đạo, hành trình sự nghiệp và các bài diễn thuyết.',
    iconType: 'executive',
    client: 'TS. Đặng Quốc Hùng — Founder & Angel Investor',
    year: '2024',
    role: 'Thiết Kế Nhận Diện Cá Nhân & Phát Triển Portfolio',
    duration: '3 Tuần',
    stats: [
      { label: 'Lời mời diễn giả & hội nghị', value: '3x' },
      { label: 'Điểm tin cậy thương hiệu', value: '99%' },
      { label: 'Lượt tải Bio / Press Kit', value: '1,200+' }
    ],
    overview: 'Nexus Executive biến hành trình 15 năm lãnh đạo công nghệ thành một câu chuyện truyền cảm hứng sắc sảo. Tích hợp trung tâm truyền thông, kho bài viết chuyên sâu và liên hệ đặt lịch cố vấn trực tiếp.',
    deliverables: [
      'Bản Press Kit & Media Kit kỹ thuật số tải nhanh một chạm',
      'Dòng thời gian sự nghiệp và các thương vụ đầu tư nổi bật',
      'Hệ thống đặt lịch tư vấn và phỏng vấn tự động',
      'Chuẩn nhận diện thương hiệu cá nhân đẳng cấp C-Level'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Motion', 'Vite'],
    colorTheme: '#2563eb',
    previewType: 'executive'
  }
];
