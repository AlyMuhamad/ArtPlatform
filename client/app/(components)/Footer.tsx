import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.footerRow}>
          <div className={styles.head}>Artplatform</div>
          <div>where artists get the value they deserve</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Explore</div>
          <div>Art</div>
          <div>Collections</div>
          <div>Domain name</div>
          <div>Utility</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Statistics</div>
          <div>Ranking</div>
          <div>Activity</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Resource</div>
          <div>Help Center</div>
          <div>Platform status</div>
          <div>Partners</div>
          <div>FAQ</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Company</div>
          <div>About us</div>
          <div>Career</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
