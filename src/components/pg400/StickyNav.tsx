import React from 'react';
import Link from 'next/link';
import styles from './StickyNav.module.css';

type NavLink = {
  label: string;
  path: string;
};

type StickyNavProps = {
  navLinks: NavLink[];
  activeId: string; 
};

const StickyNav = ({ navLinks, activeId }: StickyNavProps) => {
  return (
    <nav className={styles.stickyNav}>
      <ul>
        {navLinks.map(link => {
          
          const id = link.path.split('#')[1];
          return (
            <li key={link.path}>
              <Link 
                href={link.path}
                className={`${styles.navLink} ${activeId === id ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default StickyNav;