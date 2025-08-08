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
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]); 

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


  const isParentActive = (item: NavLink, currentPathname: string) => {

    // Rule 1: Special handling for the 'Services' section (/Pg200)
    if (item.path === '/Pg200') {
      const serviceChildPages = ['/Pg201', '/Pg202', '/Pg203'];
      // If the current path is any of the service child pages, return true immediately.
      if (serviceChildPages.includes(currentPathname)) {
        return true;
      }
    }

    // Rule 2: Special handling for 'About Us' (/Pg400), which uses anchor links, so startsWith is better.
    if (item.path === '/Pg400') {
      // If the path starts with /Pg400 (e.g., for /Pg400#profile), return true.
      if (currentPathname.startsWith('/Pg400')) {
        return true;
      }
    }

    // Special case for the homepage: highlight '/Pg100' when on the root path '/'.
    if (item.path === '/Pg100' && currentPathname === '/') {
      return true;
    }

    // Exact match for the root path itself, to prevent it from matching other paths.
    if (item.path === '/') {
      return currentPathname === '/';
    }

    // Default case: exact match for all other links.
    return currentPathname === item.path;
  };


 
  return (
    <>
      <header className={`custom-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="custom-header-inner">
          <div className="logo-group">
            <Image src="/images/logo-removebg-preview.png"
              alt={getMessage('common', 'alt_logo')}
              width={40}
              height={40} />
          </div>

          {!isMobile && (
            <div className="header-nav-right">
              <nav>
                <ul className="nav-menu">
                  
                  {navData.map((item) => {

                    // if (item.path === '/Pg200') {
                    //   console.log('--- DEEP DIVE DEBUG ---');
                    //   console.log('Pathname String:', `>${pathname}<`, 'Length:', pathname.length);
                    //   console.log('Item Path String:', `>${item.path}<`, 'Length:', item.path.length);

                    //   // 将两个字符串都转换为字符编码数组，进行最终比对
                    //   const pathnameCodes = Array.from(pathname).map(char => char.charCodeAt(0));
                    //   const itemPathCodes = Array.from(item.path).map(char => char.charCodeAt(0));

                    //   console.log('Pathname Char Codes:', pathnameCodes);
                    //   console.log('Item Path Char Codes:', itemPathCodes);
                    // }


                    return (
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
                    );
                  })}
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
                        <span className={`${isParentActive(item, pathname) ? 'active' : ''}`}>{item.label}</span>
                        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                      </button>
                      <div className={`submenu-list ${isExpanded ? 'expanded' : ''}`}>
                        <ul>
                          {item.children.map((child) => (
                            <li key={child.path} className="submenu-item">
                              <Link
                                href={child.path}
                                 className={`submenu-link ${pathname === child.path.split('#')[0] ? 'active' : ''}`}
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