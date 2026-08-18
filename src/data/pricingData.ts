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
    tagline: 'Hỗ trợ chỉnh sửa theo yêu cầu & triển khai nhanh chóng',
    description: 'Thiết kế portfolio theo mẫu có sẵn, có demo trước, hỗ trợ chỉnh sửa giao diện theo yêu cầu. Giao diện hiển thị đẹp trên mọi thiết bị và đưa website lên Internet nhanh chóng.',
    features: [
      'Website portfolio hoàn chỉnh theo mẫu đã chọn',
      'Giao diện hiển thị đẹp trên điện thoại & máy tính (100% Responsive)',
      'Demo trước khi bàn giao để xem và yêu cầu chỉnh sửa dễ dàng',
      'Hỗ trợ chỉnh sửa nội dung chu đáo (Text, hình ảnh cá nhân, dự án)',
      'Hỗ trợ đưa website lên online (Triển khai miễn phí trên Vercel)',
      'Bàn giao Source Code sạch đầy đủ (nếu khách cần)',
      'Hỗ trợ deploy & bảo trì kỹ thuật miễn phí 1 năm'
    ],
    ctaText: 'Chọn Gói Theo Mẫu (500K)'
  },
  {
    id: 'custom-portfolio',
    name: 'Gói Thiết Kế Portfolio Theo Yêu Cầu',
    badge: 'Khuyên Dùng • Độc Bản UI/UX',
    isPopular: true,
    price: '1.000.000',
    formattedPrice: '₫1.000.000',
    duration: '7 ngày',
    revisions: '3 lần chỉnh sửa',
    tagline: 'Thiết kế độc quyền, giúp bạn nổi bật với phong cách cá nhân',
    description: 'Thiết kế portfolio theo yêu cầu riêng, giúp bạn nổi bật với phong cách cá nhân, hỗ trợ từ A–Z, có demo trước, chỉnh sửa linh hoạt, giao diện hiện đại và đưa website lên Internet.',
    features: [
      'Thiết kế UI/UX độc quyền theo phong cách & thương hiệu cá nhân',
      'Demo tương tác trước để xem trực tiếp và góp ý chỉnh sửa',
      'Chỉnh sửa theo yêu cầu không giới hạn đến khi hoàn toàn ưng ý',
      'Hiển thị mượt mà trên mọi thiết bị (Mobile, Tablet, Desktop)',
      'Tối ưu tốc độ tải trang cực nhanh (< 1s) & Cấu trúc chuẩn SEO',
      'Hỗ trợ đưa website lên Internet (Vercel & cấu hình Domain riêng)',
      'Bàn giao toàn bộ Source Code & tài nguyên bản quyền 100%',
      'Hỗ trợ deploy free 1 năm & bảo hành vận hành ổn định'
    ],
    ctaText: 'Chọn Gói Theo Yêu Cầu (1 Triệu)'
  }
];
