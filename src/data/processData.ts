import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Tiếp Nhận & Tư Vấn Định Hướng',
    subtitle: 'Lắng nghe mục tiêu sự nghiệp, phong cách và thu thập tư liệu.',
    badge: 'Bước 01 • Khởi Đầu',
    timeframe: 'Ngày 1',
    activities: [
      'Trao đổi trực tiếp 1-1 qua Zalo để hiểu rõ định vị cá nhân và mục tiêu ứng tuyển / tìm kiếm khách hàng',
      'Lựa chọn gói dịch vụ tối ưu (Gói theo mẫu sẵn có 500k hoặc Gói theo yêu cầu riêng 1tr)',
      'Tiếp nhận hình ảnh cá nhân, thông tin kinh nghiệm CV, dự án tiêu biểu và đường link liên quan'
    ]
  },
  {
    step: 2,
    title: 'Xác Nhận Hợp Tác & Tạm Ứng 50%',
    subtitle: 'Thống nhất yêu cầu, tiến độ và khởi động quy trình lập trình.',
    badge: 'Bước 02 • Kích Hoạt Dự Án',
    timeframe: 'Ngày 1',
    activities: [
      'Chốt bảng tóm tắt yêu cầu thiết kế (Design Brief), cấu trúc thông tin và thời gian bàn giao cam kết',
      'Quý khách tiến hành thanh toán tạm ứng 50% chi phí để chính thức kích hoạt dự án vào luồng phát triển',
      'Thiết lập môi trường làm việc chuyên biệt, chuẩn bị tài nguyên mã nguồn và cam kết tiến độ rõ ràng'
    ]
  },
  {
    step: 3,
    title: 'Thiết Kế & Trải Nghiệm Demo',
    subtitle: 'Xây dựng website hoàn chỉnh và cung cấp đường link Demo chạy thử.',
    badge: 'Bước 03 • Trực Quan Hóa',
    timeframe: 'Ngày 2 – 4',
    activities: [
      'Lập trình giao diện hiện đại với React, TypeScript, HTML/CSS và tối ưu trải nghiệm người dùng (UX)',
      'Tối ưu hiển thị mượt mà 100% Responsive trên điện thoại, máy tính bảng và màn hình máy tính',
      'Gửi link Demo trực tiếp để quý khách trải nghiệm thực tế, duyệt giao diện và gửi góp ý chỉnh sửa'
    ]
  },
  {
    step: 4,
    title: 'Nghiệm Thu, Quyết Toán & Triển Khai',
    subtitle: 'Hoàn thiện tinh chỉnh, thanh toán 50% còn lại và đưa website lên Internet.',
    badge: 'Bước 04 • Bàn Giao & Vận Hành',
    isAccent: true,
    timeframe: 'Ngày 3 – 7',
    activities: [
      'Thực hiện các yêu cầu chỉnh sửa theo phản hồi (3 lần hoặc không giới hạn tùy gói) đến khi hoàn toàn hài lòng',
      'Quý khách nghiệm thu sản phẩm hoàn thiện và thanh toán 50% chi phí còn lại',
      'Triển khai website chính thức lên Internet qua Vercel, kết nối tên miền riêng, bàn giao full source code và kích hoạt gói hỗ trợ deploy 1 năm'
    ]
  }
];
