import React from 'react';
import Link from 'next/link';
import styles from './InPageLinks.module.css';


type NavLink = {
  label: string;
  path: string;
};

type InPageLinksProps = {
  navLinks: NavLink[];
};

const InPageLinks = ({ navLinks }: InPageLinksProps) => {
  return (
    <nav className={styles.nav}>
      {navLinks.map(link => (
        <Link key={link.path} href={link.path} className={styles.link}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default InPageLinks;