import Link from 'next/link';
import styles from './Card.module.css'
export const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}></div>
        <p className={styles.title}>FIRST BLOG TITL…</p>
        <p className={styles.subtitle}>By Aon 2023</p>
        <div className={styles.cardfoot}>
          <Link href="/">Read More</Link>
          <span>June 19, 2020</span>
        </div>
    </div>
  );
}
