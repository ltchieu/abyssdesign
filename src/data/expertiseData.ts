import { ExpertiseItem } from '../types';

export const EXPERTISE: ExpertiseItem[] = [
  {
    id: 'portfolio-design',
    title: 'Thiết Kế & Lập Trình Portfolio Hiện Đại',
    iconType: 'compass',
    description: 'Xây dựng website portfolio cá nhân ấn tượng từ con số 0 hoặc tinh chỉnh theo mẫu tuyển chọn. Sử dụng React, TypeScript và Tailwind CSS tạo nên giao diện hiện đại, tinh tế và làm nổi bật hồ sơ năng lực của bạn trước nhà tuyển dụng hay đối tác.',
    points: [
      'Bố cục trực quan, tập trung vào điểm mạnh và thành tựu nổi bật',
      'Hiệu ứng chuyển cảnh vi mô tinh tế, tạo cảm giác cao cấp chuyên nghiệp',
      'Định hình phong cách thương hiệu cá nhân riêng biệt và đồng bộ'
    ],
    metrics: 'Chuẩn UX/UI Đột Phá',
    tools: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Figma']
  },
  {
    id: 'performance-deploy',
    title: 'Tối Ưu Hiệu Suất & Triển Khai Vercel',
    iconType: 'code',
    description: 'Đảm bảo website của bạn luôn đạt tốc độ tải trang nhanh nhất, tối ưu trải nghiệm trên mọi kích thước màn hình điện thoại & máy tính, đồng thời đưa website lên môi trường Internet ổn định với gói hỗ trợ deploy miễn phí 1 năm.',
    points: [
      'Tối ưu tốc độ tải trang đạt chuẩn Core Web Vitals (< 1s)',
      '100% Responsive mượt mà trên iPhone, Android, Tablet và Desktop',
      'Triển khai Vercel, bảo mật HTTPS và hỗ trợ kỹ thuật tận tâm 1 năm'
    ],
    metrics: '99+ Điểm Google Lighthouse',
    tools: ['Vercel', 'Core Web Vitals', 'SEO Metadata', 'Git', 'SSL Security']
  }
];
