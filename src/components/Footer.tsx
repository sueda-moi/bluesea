// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

// 定义链接项类型
type FooterLink = {
  href: string;
  label: string;
};

// 定义链接组类型
type LinkGroup = {
  title: string;
  links: FooterLink[];
  // 基础路径，例如/pg200，方便未来扩展
  basePath: string; 
};

const Footer = () => {
  // 站点地图数据，采用新的ID体系
  const sitemap: LinkGroup[] = [
    {
      title: '事業内容',
      basePath: '/pg200',
      links: [
        { href: '/pg201', label: 'ITソリューション・製品' },
        { href: '/pg202', label: '宿泊施設運営・集客支援' },
        { href: '/pg203', label: '収益不動産コンサルティング' },
      ],
    },
    {
      title: '会社情報',
      basePath: '/pg400',
      links: [
        { href: '/pg401', label: 'CEOメッセージ' },
        { href: '/pg402', label: '会社概要' },
        { href: '/pg403', label: '経営陣' },
        { href: '/pg404', label: '沿革' },
        { href: '/pg405', label: 'アクセス' },
      ],
    },
  ];

  // Footer右侧的独立链接
  const standaloneLinks: FooterLink[] = [
    { href: '/pg901', label: '記事一覧' },
    { href: '/pg500', label: '採用情報' }, // 指向一级页面
    { href: '/pg600', label: 'お問い合わせ' }, // 指向一级页面
    { href: '/pg902', label: '個人情報保護方針' },
    { href: '/pg903', label: 'DX戦略' },
    { href: '/pg904', label: 'パートナーシップ構築宣言' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Left: Logo */}
        <div className="footer-logo">
          <Link href="/pg100"> {/* 首页指向pg100 */}
            <Image src="/logo-sozonext-dark.svg" alt="SOZONEXT Logo" width={200} height={50} />
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
          〒111-0041 東京都台東区元浅草2-6-4 上野コアビル9階 TEL 03-3842-1552
        </p>
        <p className="footer-copyright">
          Copyright © 2024 SOZONEXT Co.,Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;