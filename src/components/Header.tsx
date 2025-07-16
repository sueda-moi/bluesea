// components/Header.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { useMessage } from '@/lib/useMessage';
import './Header.css';
import { useScreenSizeStore } from '@/store/useScreenSizeStore';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const getMessage = useMessage(); // メッセージ取得関数を使用

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isMobileIframe = useScreenSizeStore((state) => state.isMobileIframe);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (!isMobileIframe && isMenuOpen) {
      toggleMenu();
    }
  }, [isMobileIframe, isMenuOpen, toggleMenu]);

  const [initialPathname, setInitialPathname] = useState(pathname);

  useEffect(() => {
    if (isMobileIframe && isMenuOpen && pathname !== initialPathname) {
      toggleMenu();
    }
    setInitialPathname(pathname);
  }, [pathname, isMobileIframe, isMenuOpen, toggleMenu, initialPathname]);


  const navItems = [
    { path: '/Pg100', label: getMessage('common', 'nav_pg100') },
    { path: '/Pg200', label: getMessage('common', 'nav_pg200') },
    { path: '/Pg300', label: getMessage('common', 'nav_pg300') },
    { path: '/Pg400', label: getMessage('common', 'nav_pg400') },
    { path: '/Pg500', label: getMessage('common', 'nav_pg500') },
  ];
  const contactPagePath = '/pg600'; // お問い合わせページのパス

  return (
    <>
      <header className={`custom-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="custom-header-inner">
          <div className="logo-group">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          </div>

          {/* 2. デスクトップ用ナビゲーション (PC表示時) */}
          {!isMobileIframe && (
            <div className="header-nav-right">
              <nav className="nav-menu">
                
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} className={`nav-item ${pathname === item.path ? 'active' : ''}`}>
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* <LanguageSwitcher scrolled={scrolled} /> */}
              <Link href={contactPagePath} className="nav-contact-button">
                {getMessage('common', 'nav_pg600')}
              </Link>
            </div>
          )}

          <div className="header-right">
            {/* 桌面端语言切换器 */}
            {!isMobileIframe && <LanguageSwitcher scrolled={scrolled} />}
            {/* 手机端菜单切换按钮 */}
            {isMobileIframe && (
              <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FiX size={28} /> : <FiAlignJustify size={28} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 3. モバイル用ナビゲーション (モバイル表示時) */}
      {isMobileIframe && isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <nav className="mobile-nav-menu">
              {navItems.map((item) =>
                pathname === item.path ? (
                  <span key={item.path} className="nav-item active">
                    {item.label}
                  </span>
                ) : (
                  <Link key={item.path} href={item.path} className="nav-item">
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="mobile-language-switcher">
              <LanguageSwitcher scrolled={false} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;