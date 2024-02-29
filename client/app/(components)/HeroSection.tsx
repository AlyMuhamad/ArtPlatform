import styles from './HeroSection.module.css';
import Header from '../(ui)/Header';
import Link from 'next/link';
import Image from 'next/image';
import image from '../(assets)/1.png';

function HeroSection() {
  return (
    <div>
      <Header />
      <div className={styles.section}>
        <div className={styles.contentSide}>
          <div className={styles.headline}>
            <div>Discover</div>
            <div>Digital Art and</div>
            <div>Collect NFTs</div>
          </div>
          <div className={styles.subHeadline}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
            enim eum, recusandae voluptas dignissimos quibusdam dicta ab,
            suscipit, impedit reprehenderit? Voluptates odio minus optio
            deleniti amet sint possimus illum
          </div>
          <div className={styles.btns}>
            <Link href="/" className={`${styles.btn} ${styles.startBtn}`}>
              Get Started
            </Link>
            <Link href="/" className={`${styles.btn} ${styles.moreBtn}`}>
              Learn more &rarr;
            </Link>
          </div>
        </div>
        <Image
          src={image}
          alt="a girl"
          className={styles.landingGirls}
          priority
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div className={styles.photo}></div>
        <div className={styles.stats}>
          <div className={styles.row}>
            <div className={styles.title}>Artwork</div>
            <div className={styles.info}>12K+</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>Auction</div>
            <div className={styles.info}>1K+</div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>Artist</div>
            <div className={styles.info}>200+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
