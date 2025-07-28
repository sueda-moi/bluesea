// components/Header.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiAlignJustify, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { useMessage } from '@/lib/useMessage';
import './Header.css';

// 1. 定义新的数据和类型
type NavLink = {
  label: string;
  path: string;
  children?: NavLink[];
};

// const navData: NavLink[] = [
//   { label: 'TOP', path: '/Pg100' },
//   {
//     label: '事業内容',
//     path: '/Pg200',
//     children: [
//       { label: '国際貿易・流通支援', path: '/Pg201' },
//       { label: 'ITインフラ・SaaS開発', path: '/Pg202' },
//       { label: '不動産企画・収益化支援', path: '/Pg203' },
//     ],
//   },
//   { label: 'お知らせ', path: '/Pg300' },
//   {
//     label: '会社情報',
//     path: '/Pg400',
//     children: [
//       { label: 'CEOメッセージ', path: '/Pg400#ceo-message' },
//       { label: '会社概要', path: '/Pg400#profile' },
//       { label: '沿革', path: '/Pg400#history' },
//       { label: 'アクセス', path: '/Pg400#access' },
//     ],
//   },
//   { label: '採用情報', path: '/Pg500' },
//   { label: 'お問い合わせ', path: '/Pg600' },
// ];

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const getMessage = useMessage();
  const navData: NavLink[] = [
    { label: getMessage('common', 'nav_top'), path: '/Pg100' },
    {
      label: getMessage('common', 'nav_services'),
      path: '/Pg200',
      children: [
        { label: getMessage('common', 'nav_services_1'), path: '/Pg201' },
        { label: getMessage('common', 'nav_services_2'), path: '/Pg202' },
        { label: getMessage('common', 'nav_services_3'), path: '/Pg203' },
      ],
    },
    { label: getMessage('common', 'nav_news'), path: '/Pg300' },
    {
      label: getMessage('common', 'nav_about'),
      path: '/Pg400',
      children: [
        { label: getMessage('common', 'nav_about_1'), path: '/Pg400#ceo-message' },
        { label: getMessage('common', 'nav_about_2'), path: '/Pg400#profile' },
        { label: getMessage('common', 'nav_about_3'), path: '/Pg400#history' },
        { label: getMessage('common', 'nav_about_4'), path: '/Pg400#access' },
      ],
    },
    { label: getMessage('common', 'nav_careers'), path: '/Pg500' },
    { label: getMessage('common', 'nav_contact'), path: '/Pg600' },
  ];
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [initialPathname, setInitialPathname] = useState(pathname);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      toggleMenu();
    }
  }, [isMobile, isMenuOpen, toggleMenu]);

  useEffect(() => {
    if (isMobile && isMenuOpen && pathname !== initialPathname) {
      toggleMenu();
    }
    setInitialPathname(pathname);
  }, [pathname, isMobile, isMenuOpen, toggleMenu, initialPathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      setExpandedItems([]);
    }
  }, [isMenuOpen]);

  const handleAccordionToggle = (path: string) => {
    setExpandedItems(prev =>
      prev.includes(path) ? prev.filter(p => p !== path) : [...prev, path]
    );
  };

  // ---  isParentActive 辅助函数 ---
  const isParentActive = (item: NavLink, currentPathname: string) => {
    // 调试：打印当前检查的导航项和当前的 pathname，并去除潜在空格进行测试
    console.group(`Checking Active State for: ${item.label}`);
    console.log('Nav Item Path (trimmed):', item.path.trim());
    console.log('Current Pathname (trimmed):', currentPathname.trim());

    const trimmedItemPath = item.path.trim();
    const trimmedCurrentPathname = currentPathname.trim();

    let isActive = false;

    if (!item.children) {
      // 对于没有child菜单的项
      // 精确匹配，或以路径开头（用于像 /Pg400#anchor 这样 pathname 不含 # 的情况）
      isActive = trimmedCurrentPathname === trimmedItemPath || 
                 trimmedCurrentPathname.startsWith(trimmedItemPath + '/');
      
      // 特别处理首页 /Pg100 和实际的根路径 /
      if (trimmedItemPath === '/Pg100' && trimmedCurrentPathname === '/') {
        isActive = true;
      }
      console.log(`  (No children) Is Active: ${isActive}`);
    } else {
      // 对于有child菜单的项
      // 检查当前 pathname 是否以parent项的 path 开头
      isActive = trimmedCurrentPathname.startsWith(trimmedItemPath);
      console.log(`  (With children) Is Active (starts-with parent path): ${isActive}`);
    }

    console.log(`Final Active State for ${item.label}: ${isActive}`);
    console.groupEnd();
    return isActive;
  };

  return (
    <>
      <header className={`custom-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="custom-header-inner">
          <div className="logo-group">
            <Image src="/images/logo.png" 
            alt={getMessage('common', 'alt_logo')} 
            width={40} 
            height={40} />
          </div>

          {!isMobile && (
            <div className="header-nav-right">
              <nav>
                <ul className="nav-menu">
                  {navData.map((item) => (
                    <li
                      key={item.path}
                      className="nav-item-container"
                      onMouseEnter={() => setOpenMenu(item.path)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      {item.children ? (
                        <span className={`nav-item nav-item-noclick ${isParentActive(item, pathname) ? 'active' : ''}`}>
                          {item.label}
                        </span>
                      ) : (
                        <Link href={item.path} className={`nav-item ${isParentActive(item, pathname) ? 'active' : ''}`}>
                          {item.label}
                        </Link>
                      )}

                      {item.children && (
                        <ul className={`dropdown-menu ${openMenu === item.path ? 'open' : ''}`}>
                          {item.children.map((child) => (
                            <li key={child.path} className="dropdown-item">
                              {/* child菜单项也应该有自己的活跃状态判断 */}
                              <Link 
                                href={child.path} 
                                className={`dropdown-link ${pathname === child.path || pathname.startsWith(child.path + '#') ? 'active' : ''}`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          <div className="header-right">
            {!isMobile && <LanguageSwitcher scrolled={scrolled} />}
            {isMobile && (
              <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FiX size={28} /> : <FiAlignJustify size={28} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 手机端导航 (Mobile Navigation) */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <nav className="mobile-nav-menu">
              {navData.map((item) => {
                const isExpanded = expandedItems.includes(item.path);

                if (item.children) {
                  return (
                    <div key={item.path} className="mobile-menu-group">
                      <button className="accordion-toggle" onClick={() => handleAccordionToggle(item.path)}>
                        {/* 手机端parent级导航项也应该有高亮 */}
                        <span className={`${isParentActive(item, pathname) ? 'active' : ''}`}>{item.label}</span>
                        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                      </button>
                      <div className={`submenu-list ${isExpanded ? 'expanded' : ''}`}>
                        <ul>
                          {item.children.map((child) => (
                            <li key={child.path} className="submenu-item">
                              {/* 手机端child菜单项高亮 */}
                              <Link 
                                href={child.path} 
                                className={`submenu-link ${pathname === child.path || pathname.startsWith(child.path + '#') ? 'active' : ''}`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <Link 
                      key={item.path} 
                      href={item.path} 
                      className={`mobile-menu-link ${isParentActive(item, pathname) ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
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