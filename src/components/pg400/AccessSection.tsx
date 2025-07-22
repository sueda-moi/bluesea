import React from 'react';
import styles from './AccessSection.module.css';


const addressInfo = {
  postalCode: '〒100-0005', 
  address: '東京都千代田区丸の内三丁目4番1号 新国際ビル8階',
  tel: 'TEL: 03-XXXX-XXXX' 
};

const AccessSection = () => {
  return (

    <section id="access" className={styles.section}>
      <h2 className={styles.title}>アクセス</h2>
      <div className={styles.contentContainer}>
        <div className={styles.addressInfo}>
          <p className={styles.companyName}>藍海株式会社 (Blue Ocean Co., Ltd.)</p>
          <p>{addressInfo.postalCode}</p>
          <p>{addressInfo.address}</p>
          <p>{addressInfo.tel}</p>
        </div>

        <div className={styles.mapContainer}>
          {/* 谷歌地图嵌入代码 */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.830232924195!2d139.7618623762887!3d35.68113842948283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfaa0556363%3A0x23c3de8215d65c69!2z5paw5Zu96Zqb44OT44Or!5e0!3m2!1sja!2sjp!4v1721615598506!5m2!1sja!2sjp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className={styles.buttonContainer}>
            <a 
                href="https://maps.app.goo.gl/9uT5d2F2D1g8bXpS7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.mapButton}
            >
                Googleマップで見る
            </a>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;