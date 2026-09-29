import { CONTACT_DATA } from './contactData';

export const FOOTER_LINKS = {
  nav: [
    { label: 'Chính sách bảo mật', href: '#privacy' },
    { label: 'Điều khoản dịch vụ', href: '#terms' },
    { label: `Zalo: ${CONTACT_DATA.formattedPhone}`, href: CONTACT_DATA.zaloUrl, isExternal: true },
    { label: 'LinkedIn', href: 'https://linkedin.com', isExternal: true },
    { label: 'Behance', href: 'https://behance.net', isExternal: true }
  ],
  copyright: `© ${new Date().getFullYear()} ABYSS Design. Thiết kế website portfolio cá nhân chỉn chu & tận tâm.`
};
