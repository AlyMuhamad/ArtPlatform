import Link from 'next/link';
import styles from './CTA.module.css';

function CTA() {
  return (
    <div className={styles.section}>
      <div className={styles.headline}>Subscribe to Get News About NFTs</div>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Email address"
          className={styles.email}
        />
        <Link href="/" className={styles.btn}>
          Subscribe
        </Link>
      </div>
    </div>
  );
}

export default CTA;
