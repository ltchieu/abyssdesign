import { DeveloperInfo } from '../types';

export const DEVELOPER_DATA: DeveloperInfo = {
  name: 'Nguyễn Thành Nam',
  role: 'Web Developer & UI/UX Specialist',
  bio: 'Mình là lập trình viên chuyên xây dựng website portfolio cá nhân cho các bạn sinh viên, người đi làm và freelancer. Mình tin rằng một portfolio hiệu quả không cần quá phức tạp, mà phải làm nổi bật năng lực của bạn, tải nhanh như chớp và hiển thị chỉn chu trên mọi thiết bị. Mình luôn sẵn lòng đồng hành từng bước để bạn có được trang web thật sự ưng ý.',
  skills: [
    { name: 'React 19 / Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'HTML5 / Modern CSS', category: 'Core' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Vercel Deployment', category: 'DevOps' },
    { name: 'UI/UX Design', category: 'Design' },
    { name: 'Tối ưu Core Web Vitals', category: 'Performance' },
    { name: 'SEO Onpage & Schema', category: 'SEO' }
  ],
  metrics: [
    { value: '100%', label: 'Toàn Quyền Sở Hữu', desc: 'Bàn giao mã nguồn sạch đầy đủ' },
    { value: '1-1', label: 'Đồng Hành Chu Đáo', desc: 'Tư vấn và hỗ trợ chuẩn bị nội dung' },
    { value: '< 1s', label: 'Tốc Độ Mở Trang', desc: 'Tải tức thì, không giật lag' },
    { value: '0đ', label: 'Phí Phát Sinh', desc: 'Báo giá rõ ràng, không chi phí ẩn' }
  ],
  commitments: [
    'Bố cục trực quan, tập trung làm nổi bật những dự án và kỹ năng giá trị nhất của bạn',
    'Tương thích hoàn hảo trên 100% thiết bị (điện thoại thông minh, máy tính bảng & PC)',
    'Mã nguồn sạch sẽ, dễ dàng cập nhật thêm dự án mới bất kỳ lúc nào',
    'Hướng dẫn sử dụng và hỗ trợ bạn đưa website lên Internet từ đầu đến cuối'
  ]
};
