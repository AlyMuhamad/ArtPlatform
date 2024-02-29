import styles from './FeatureRow.module.css';
import Image from 'next/image';
import image1 from '../(assets)/3.jpg';
import image2 from '../(assets)/4.jpg';
import image3 from '../(assets)/5.jpg';

function FeatureRow() {
  return (
    <div className={styles.section}>
      <div className={styles.contentSide}>
        <div>Artist</div>
        <div className={styles.headline}>Top List Artist</div>
        <div>
          We have dozens of artists who contribute to create amazing things
        </div>
      </div>
      <div className={styles.artistCard}>
        <div className={styles.pictureWrapper}>
          <Image
            src={image1}
            alt="a girl"
            className={styles.artistpic}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.artistName}>Rodney Eaton</div>
        <div>Joined: Mar, 2022</div>
        <Image
          src={image2}
          alt="a girl"
          className={styles.art}
          priority
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className={styles.artistCard}>
        <div className={styles.pictureWrapper}>
          <Image
            src={image3}
            alt="a girl"
            className={styles.artistpic}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.artistName}>Bella Melton</div>
        <div>Joined: Jan, 2019</div>
        <Image
          src={image2}
          alt="a girl"
          className={styles.art}
          priority
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default FeatureRow;
