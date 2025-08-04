// components/Footer.tsx
import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import './Footer.css';
import { useMessage } from '@/lib/useMessage';

type FooterLink = {
  href: string;
  label: string;
};

// 定义链接组类型
type LinkGroup = {
  title: string;
  links: FooterLink[];
  basePath: string;
};

const Footer = () => {
  const getMessage = useMessage();

  const sitemap: LinkGroup[] = [
    {
      title: getMessage('common', 'footer_sitemap_services'),
      basePath: '/Pg200',
      links: [
        { href: '/Pg201', label: getMessage('common', 'nav_services_1') },
        { href: '/Pg202', label: getMessage('common', 'nav_services_2') },
        { href: '/Pg203', label: getMessage('common', 'nav_services_3') },
      ],
    },
    {
      title: getMessage('common', 'footer_sitemap_about'),
      basePath: '/Pg400',
      links: [
        { href: '/Pg400#ceo-message', label: getMessage('common', 'nav_about_1') },
        { href: '/Pg400#profile', label: getMessage('common', 'nav_about_2') },
        { href: '/Pg400#history', label: getMessage('common', 'nav_about_3') },
        { href: '/Pg400#access', label: getMessage('common', 'nav_about_4') },
      ],
    },
  ];

  const standaloneLinks: FooterLink[] = [
    { href: '/Pg300', label: getMessage('common', 'footer_sitemap_articles') },
    { href: '/Pg500', label: getMessage('common', 'nav_careers') },
    { href: '/Pg600', label: getMessage('common', 'nav_contact') },
  ];

  return (
    <footer className="footer-container">
      {/* <div className="footer-main"> */}
        {/* Left: Logo */}
        {/* <div className="footer-logo">
          <Link href="/pg100">
            <Image src="/images/logo.png" alt={getMessage('common', 'alt_logo')} width={200} height={160} />
          </Link>
        </div> */}

        {/* Middle: Sitemap */}
        {/* <div className="footer-sitemap">
          {sitemap.map((group) => (
            <div key={group.title} className="link-group">
              
              <Link href={group.basePath} className="link-group-title">
                {group.title}
              </Link>
              <ul className="link-list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        {/* Right: Standalone Links */}
        {/* <div className="footer-standalone-links">
          <ul className="link-list">
            {standaloneLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link bold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>*/}
      {/* </div>  */}

      {/* Bottom: Address and Copyright */}
      <div className="footer-bottom">
        <p className="footer-address">
           {getMessage('common', 'footer_address')}
        </p>
        <p className="footer-copyright">
           {getMessage('common', 'footer_copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;