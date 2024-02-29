import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.link}>
        Artplatform
      </Link>
      <Link href="/" className={styles.link}>
        Collection
      </Link>
      <Link href="/" className={styles.link}>
        Marketplace
      </Link>
      <Link href="/" className={styles.link}>
        Community
      </Link>
      <Link href="/" className={styles.link}>
        Signup
      </Link>
    </div>
  );
}

export default Header;
