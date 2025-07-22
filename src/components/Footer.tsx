// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

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

  const sitemap: LinkGroup[] = [
    {
      title: '事業内容',
      basePath: '/pg200',
      links: [
        { href: '/Pg201', label: 'ITソリューション・製品' },
        { href: '/Pg202', label: '宿泊施設運営・集客支援' },
        { href: '/Pg203', label: '収益不動産コンサルティング' },
      ],
    },
    {
      title: '会社情報',
      basePath: '/pg400',
      links: [
        { href: '/Pg400#ceo-message', label: 'CEOメッセージ' },
        { href: '/Pg400#profile', label: '会社概要' },
        { href: '/Pg400#history', label: '沿革' },
        { href: '/Pg400#access', label: 'アクセス' },
      ],
    },
  ];

  const standaloneLinks: FooterLink[] = [
    { href: '/Pg300', label: '記事一覧' },
    { href: '/Pg500', label: '採用情報' },
    { href: '/Pg600', label: 'お問い合わせ' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Left: Logo */}
        <div className="footer-logo">
          <Link href="/pg100"> 
            <Image src="/images/logo.png" alt="SOZONEXT Logo" width={200} height={160} />
          </Link>
        </div>

        {/* Middle: Sitemap */}
        <div className="footer-sitemap">
          {sitemap.map((group) => (
            <div key={group.title} className="link-group">
              {/* 标题本身也可以是一个链接，指向该分类的概览页 */}
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
        </div>

        {/* Right: Standalone Links */}
        <div className="footer-standalone-links">
          <ul className="link-list">
            {standaloneLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link bold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: Address and Copyright */}
      <div className="footer-bottom">
        <p className="footer-address">
          〒100-0005 東京都千代田区丸の内三丁目4番1号 新国際ビル8階
        </p>
        <p className="footer-copyright">
          Copyright © 2024 BLUESEA Co.,Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;