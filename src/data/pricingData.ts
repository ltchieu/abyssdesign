import { PricingPackage } from '../types';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'template-portfolio',
    name: 'Gói Lập Trình Theo Mẫu Sẵn Có',
    badge: 'Tiết Kiệm & Nhanh Chóng',
    isPopular: false,
    price: '500.000',
    formattedPrice: '₫500.000',
    duration: '3 ngày',
    revisions: '3 lần chỉnh sửa',
    tagline: 'Lựa chọn tiết kiệm, nhanh chóng và chuẩn đẹp cho sinh viên & người mới đi làm',
    description: 'Thiết kế portfolio từ bộ mẫu hiện đại đã chọn lọc. Thay thế toàn bộ hình ảnh, dự án, thông tin của bạn một cách chỉn chu, sẵn sàng online chỉ sau 3 ngày.',
    features: [
      'Xây dựng từ bộ layout portfolio hiện đại, tinh gọn',
      'Tương thích 100% trên điện thoại, máy tính bảng & laptop',
      'Thay thế toàn bộ nội dung: Bio, CV, dự án và mạng xã hội cá nhân',
      'Tặng 1 năm lưu trữ & triển khai đám mây (Deploy miễn phí)',
      'Bàn giao toàn bộ mã nguồn sạch để bạn tự do phát triển'
    ],
    ctaText: 'Chọn Gói Theo Mẫu (500K)'
  },
  {
    id: 'custom-portfolio',
    name: 'Gói Thiết Kế Portfolio Theo Yêu Cầu',
    badge: 'Khuyên Dùng • Đậm Chất Cá Nhân',
    isPopular: true,
    price: '1.000.000',
    formattedPrice: '₫1.000.000',
    duration: '7 ngày',
    revisions: 'Chỉnh sửa linh hoạt',
    tagline: 'Thiết kế độc quyền từ đầu, truyền tải trọn vẹn chất riêng và câu chuyện của bạn',
    description: 'Dành cho những ai muốn một website portfolio độc nhất vô nhị. Được tư vấn cấu trúc, thiết kế giao diện riêng biệt và tích hợp hiệu ứng chuyển động ấn tượng.',
    features: [
      'Bao gồm toàn bộ quyền lợi của Gói Theo Mẫu',
      'Thiết kế giao diện UI/UX độc quyền theo phong cách & ngành nghề riêng',
      'Tùy biến hiệu ứng chuyển động và tương tác mượt mà',
      'Hỗ trợ kết nối tên miền riêng (.com, .vn, .me, ...)',
      'Chỉnh sửa linh hoạt cùng bạn đến khi hoàn toàn hài lòng'
    ],
    ctaText: 'Chọn Gói Theo Yêu Cầu (1 Triệu)'
  }
];
