import Link from 'next/link';
import styles from './Cards.module.css';
import Image from 'next/image';
import image1 from '../(assets)/2.png';
import image2 from '../(assets)/6.png';
import image3 from '../(assets)/7.png';
import image4 from '../(assets)/8.png';

function Cards() {
  return (
    <div className={styles.section}>
      <div className={styles.art}>
        <div className={styles.card}>
          <Image
            src={image1}
            alt="a piece of art"
            className={styles.artistic}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.card}>
          <Image
            src={image2}
            alt="a piece of art"
            className={`${styles.artistic} ${styles.lady}`}
            priority
            sizes="100vw"
            style={{
              width: '45%',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.card}>
          <Image
            src={image3}
            alt="a piece of art"
            className={`${styles.artistic} ${styles.lady}`}
            priority
            sizes="100vw"
            style={{
              width: '80%',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.card}>
          <Image
            src={image4}
            alt="a piece of art"
            // className={styles.artistic}
            className={`${styles.artistic} ${styles.lady}`}
            priority
            sizes="100vw"
            style={{
              width: '60%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div className={styles.contentSide}>
        <div>Popular item</div>
        <div className={styles.headline}>Hot Trending On This Week</div>
        <div>
          These are the best art pieces on this week, Never miss them. These are
          the best art pieces on this week, Never miss them.
        </div>
        <Link href="/">See all &rarr;</Link>
      </div>
    </div>
  );
}

export default Cards;
