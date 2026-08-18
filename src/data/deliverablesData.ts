import { DeliverableItem } from '../types';

export const DELIVERABLES: DeliverableItem[] = [
  {
    id: 'custom-website',
    title: 'Website Hiện Đại & Theo Yêu Cầu',
    description: 'Thiết kế giao diện đẹp mắt, độc bản hoặc theo mẫu tinh tuyển giúp nâng tầm vị thế thương hiệu cá nhân.',
    iconType: 'palette',
    details: [
      'Giao diện hiện đại, bố cục khoa học làm nổi bật năng lực và thành tựu',
      'Định hình phong cách màu sắc, typography tương thích với ngành nghề của bạn',
      'Cấu trúc tối ưu trải nghiệm người dùng (UX) giúp người xem nắm bắt thông tin nhanh',
      'Bàn giao toàn bộ mã nguồn sạch chuẩn React / TypeScript nếu cần'
    ]
  },
  {
    id: 'interactive-demo',
    title: 'Demo Trước Khi Bàn Giao',
    description: 'Trải nghiệm website thực tế trên môi trường chạy thử để đánh giá và yêu cầu chỉnh sửa nhanh chóng.',
    iconType: 'folder',
    details: [
      'Cung cấp liên kết demo trực tiếp để trải nghiệm trên cả máy tính và điện thoại',
      'Dễ dàng gửi phản hồi, yêu cầu điều chỉnh nội dung, hình ảnh và bố cục',
      'Hỗ trợ sửa đổi chu đáo (từ 3 lần đến không giới hạn theo gói lựa chọn)',
      'Đảm bảo bạn hoàn toàn ưng ý trước khi đưa website chính thức vào hoạt động'
    ]
  },
  {
    id: 'free-deployment',
    title: 'Triển Khai Internet & Free 1 Năm',
    description: 'Hỗ trợ đưa website lên online miễn phí qua nền tảng Vercel tốc độ cao và đồng hành hỗ trợ kỹ thuật 1 năm.',
    iconType: 'search',
    details: [
      'Triển khai toàn bộ website lên hạ tầng máy chủ đám mây Vercel toàn cầu',
      'Hỗ trợ kết nối tên miền cá nhân (custom domain) hoặc subdomain miễn phí',
      'Cấu hình chứng chỉ bảo mật SSL (HTTPS) an toàn tuyệt đối',
      '🔧 Cam kết hỗ trợ kỹ thuật & duy trì deploy miễn phí trọn vẹn 1 năm'
    ]
  },
  {
    id: 'responsive-speed',
    title: 'Responsive & Tối Ưu Tốc Độ',
    description: 'Hiển thị hoàn hảo trên mọi kích thước màn hình và tốc độ tải trang tức thì chuẩn Google Core Web Vitals.',
    iconType: 'responsive',
    details: [
      'Giao diện tương thích 100% trên Smartphone, Tablet, Laptop và Màn hình lớn',
      'Tốc độ tải trang dưới 1 giây, đạt 95–100 điểm Google PageSpeed/Lighthouse',
      'Tối ưu hóa hình ảnh sắc nét trên màn hình Retina mà không làm nặng trang',
      'Cấu trúc HTML5 chuẩn SEO và thẻ OpenGraph khi chia sẻ lên mạng xã hội / CV'
    ]
  }
];
