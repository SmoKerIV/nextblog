import Link from 'next/link';
import styles from './Card.module.css'
import dayjs from 'dayjs';
import Image from 'next/image';
export const Card = ({ blog }) => {
    return (
      <div className={styles.card}>
        <div className={styles.img}>
            <Image src={blog.photo_url} alt={blog.title} fill={true} />
        </div>
        <p className={styles.title}>{blog.title}</p>
        <p className={styles.subtitle}>{blog.category}</p>
        <div className={styles.cardfoot}>
          <Link href="/Article/[id]" as={`/Article/${blog.id}`}>Read More</Link>
          <span>{dayjs(blog.created_at).format("YYYY, MMM DD")}</span>
        </div>
      </div>
    );
}
