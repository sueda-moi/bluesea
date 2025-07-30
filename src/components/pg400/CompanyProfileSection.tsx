// components/pg400/CompanyProfileSection.tsx 
import React from 'react';
import styles from './CompanyProfileSection.module.css';


type ProfileItem = {
  label: string;
  value: string;
};
type ProfileProps = {
  title: string;
  profileData: ProfileItem[];
};

const CompanyProfileSection = ({ title, profileData }: ProfileProps) => {
  return (
    <section id="profile" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.profileContainer}>
        <dl className={styles.profileList}>
          {profileData.map((item) => (
            <React.Fragment key={item.label}>
              <dt className={styles.label}>{item.label}</dt>
              <dd className={styles.value} dangerouslySetInnerHTML={{ __html: item.value.replace(/①|②|③|④|⑤|⑥/g, '<br />&nbsp;&nbsp;') }}></dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
};
export default CompanyProfileSection;