// components/Header.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiAlignJustify, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
//import { useMessage } from '@/lib/useMessage';
import './Header.css';

// 1. 定义新的数据和类型
type NavLink = {
  label: string;
  path: string;
  children?: NavLink[];
};

const navData: NavLink[] = [
  { label: 'TOP', path: '/Pg100' },
  {
    label: '事業内容',
    path: '/Pg200',
    children: [
      { label: 'ITソリューション・製品', path: '/Pg201' },
      { label: '宿泊施設運営・集客支援', path: '/Pg202' },
      { label: '収益不動産コンサルティング', path: '/Pg203' },
    ],
  },
  { label: 'お知らせ', path: '/Pg300' },
  {
    label: '会社情報',
    path: '/Pg400',
    children: [
      { label: 'CEOメッセージ', path: '/Pg400#ceo-message' },
      { label: '会社概要', path: '/Pg400#profile' },
      { label: '沿革', path: '/Pg400#history' },
      { label: 'アクセス', path: '/Pg400#access' },
    ],
  },
  { label: '採用情報', path: '/Pg500' },
  { label: 'お問い合わせ', path: '/Pg600' },
];

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  //const getMessage = useMessage(); // メッセージ取得関数を使用

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // 为移动端菜单添加新的状态，追踪展开的项
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  // 处理窗口大小的监听
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px 是我们的断点
    };

    // 首次加载时检查一次
    checkScreenSize();

    // 添加窗口大小变化监听
    window.addEventListener('resize', checkScreenSize);

    // 组件卸载时移除监听
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []); // 空依赖数组确保这个 effect 只在挂载和卸载时运行
  const handleAccordionToggle = (path: string) => {
    setExpandedItems(prev =>
      prev.includes(path) ? prev.filter(p => p !== path) : [...prev, path]
    );
  };

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

  const [initialPathname, setInitialPathname] = useState(pathname);

  useEffect(() => {
    if (isMobile && isMenuOpen && pathname !== initialPathname) {
      toggleMenu();
    }
    setInitialPathname(pathname);
  }, [pathname, isMobile, isMenuOpen, toggleMenu, initialPathname]);

  // 移动端菜单
  useEffect(() => {
    // 关闭主菜单时，也重置手风琴的展开状态
    if (!isMenuOpen) {
      setExpandedItems([]);
    }
  }, [isMenuOpen]);


  return (
    <>
      <header className={`custom-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="custom-header-inner">
          <div className="logo-group">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          </div>

          {/* 2. デスクトップ用ナビゲーション (PC表示時) */}
          {!isMobile && (
            <div className="header-nav-right">
              {/* 3. 修改导航栏的渲染逻辑 */}
              <nav>
                <ul className="nav-menu">
                  {navData.map((item) => (
                    <li
                      key={item.path}
                      className="nav-item-container"
                      onMouseEnter={() => setOpenMenu(item.path)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      {/* 4. 根据是否有子菜单来渲染不同的元素 */}
                      {item.children ? (
                        // 如果有子菜单，渲染一个不可点击的 <span>
                        <span className={`nav-item nav-item-noclick ${pathname.startsWith(item.path) ? 'active' : ''}`}>
                          {item.label}
                        </span>
                      ) : (
                        // 如果没有子菜单，渲染一个可点击的 <Link>
                        <Link href={item.path} className={`nav-item ${pathname.startsWith(item.path) ? 'active' : ''}`}>
                          {item.label}
                        </Link>
                      )}

                      {/* 下拉菜单的逻辑保持不变 */}
                      {item.children && (
                        <ul className={`dropdown-menu ${openMenu === item.path ? 'open' : ''}`}>
                          {item.children.map((child) => (
                            <li key={child.path} className="dropdown-item">
                              <Link href={child.path} className="dropdown-link">
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
              {/* <LanguageSwitcher scrolled={scrolled} /> */}
              {/* <Link href={contactPagePath} className="nav-contact-button">
                {getMessage('common', 'nav_pg600')}
              </Link> */}
            </div>
          )}

          <div className="header-right">
            {/* 桌面端语言切换器 */}
            {!isMobile && <LanguageSwitcher scrolled={scrolled} />}
            {/* 手机端菜单切换按钮 */}
            {isMobile && (
              <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FiX size={28} /> : <FiAlignJustify size={28} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 3. モバイル用ナビゲーション (モバイル表示時) */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <nav className="mobile-nav-menu">
              {navData.map((item) => {
                const isExpanded = expandedItems.includes(item.path);

                if (item.children) {
                  // 有子菜单的项，渲染成可展开的按钮
                  return (
                    <div key={item.path} className="mobile-menu-group">
                      <button className="accordion-toggle" onClick={() => handleAccordionToggle(item.path)}>
                        <span>{item.label}</span>
                        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                      </button>
                      <div className={`submenu-list ${isExpanded ? 'expanded' : ''}`}>
                        <ul>
                          {item.children.map((child) => (
                            <li key={child.path} className="submenu-item">
                              <Link href={child.path} className="submenu-link">{child.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                } else {
                  // 没有子菜单的项，渲染成普通链接
                  return (
                    <Link key={item.path} href={item.path} className="mobile-menu-link">
                      {item.label}
                    </Link>
                  );
                }
              })}
              {/* 联系我们链接 */}
              {/* <Link href={contactPagePath} className="mobile-menu-link contact">
               
              </Link> */}
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