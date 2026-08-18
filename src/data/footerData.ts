import { CONTACT_DATA } from './contactData';

export const FOOTER_LINKS = {
  nav: [
    { label: 'Chính sách bảo mật', href: '#privacy' },
    { label: 'Điều khoản dịch vụ', href: '#terms' },
    { label: `Zalo: ${CONTACT_DATA.formattedPhone}`, href: CONTACT_DATA.zaloUrl, isExternal: true },
    { label: 'LinkedIn', href: 'https://linkedin.com', isExternal: true },
    { label: 'Behance', href: 'https://behance.net', isExternal: true }
  ],
  copyright: '© 2024 ABYSS Design. Thiết kế danh mục cho tương lai.'
};
