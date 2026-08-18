import { DeveloperInfo } from '../types';

export const DEVELOPER_DATA: DeveloperInfo = {
  name: 'Nguyễn Thành Nam',
  role: 'Web Developer & UI/UX Specialist',
  bio: 'Tôi là Web Developer chuyên làm portfolio và landing page hiện đại, tối ưu UX và hiệu suất. Sử dụng React, TypeScript, HTML/CSS và deploy trên Vercel, tôi giúp bạn tạo website đẹp, nhanh, chuẩn SEO. Tôi tập trung vào bố cục, tốc độ và chuyển đổi, giúp bạn gây ấn tượng với nhà tuyển dụng hoặc khách hàng.',
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
    { value: '100%', label: 'Đúng Tiến Độ', desc: 'Bàn giao đúng hẹn từ 3–7 ngày' },
    { value: '99+', label: 'Google Lighthouse', desc: 'Tối ưu tốc độ tải tức thì' },
    { value: '1 Năm', label: 'Hỗ Trợ Deploy Free', desc: 'Đồng hành vận hành ổn định' },
    { value: '1-1', label: 'Tư Vấn Trực Tiếp', desc: 'Hỗ trợ demo và góp ý liên tục' }
  ],
  commitments: [
    'Tập trung vào bố cục trực quan, tăng tỷ lệ chuyển đổi và gây ấn tượng mạnh từ 3 giây đầu tiên',
    'Tối ưu chuẩn UX/UI công thái học trên 100% thiết bị di động & máy tính',
    'Mã nguồn TypeScript sạch sẽ, dễ bảo trì và bàn giao trọn quyền sở hữu',
    'Hỗ trợ cấu hình tên miền và đưa website lên Vercel hoàn toàn miễn phí'
  ]
};
