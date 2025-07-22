import React from 'react';
import styles from './CompanyProfileSection.module.css';


type ProfileItem = {
  label: string;
  value: string;
};


const profileData: ProfileItem[] = [
  { label: '会社名（商号）', value: '藍海株式会社（Blue Ocean Co., Ltd.）' },
  { label: '設立日', value: '令和6年1月19日（2024年1月19日）' },
  { label: '資本金', value: '5,000万円' },
  { label: '代表者', value: '代表取締役　許 海 南（Xu Hainan）' },
  { label: '本社所在地', value: '東京都千代田区丸の内三丁目4番1号 新国際ビル8階' },
  { label: '法人番号', value: '0100-01-241688' },
  { label: '事業内容', value: '①国際貿易 ②電子機器・ITインフラ ③情報処理・SaaS開発 ④飲食/観光/宿泊施設運営 ⑤不動産企画・収益化支援 ⑥その他附帯業務' },
  { label: '海外拠点', value: 'シンガポール（Ardmore Park 1A-19-01）' },
  { label: '連絡先', value: 'TEL：03-XXXX-XXXX / Email：info@blueocean.co.jp' },
];

const CompanyProfileSection = () => {
  return (
    <section id="profile" className={styles.section}>
      <h2 className={styles.title}>会社概要</h2>
      <div className={styles.profileContainer}>
        <dl className={styles.profileList}>
          {profileData.map((item) => (
            <React.Fragment key={item.label}>
              <dt className={styles.label}>{item.label}</dt>

              <dd className={styles.value} dangerouslySetInnerHTML={{ __html: item.value.replace(/②|③|④|⑤|⑥/g, '<br />&nbsp;&nbsp;') }}></dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default CompanyProfileSection;