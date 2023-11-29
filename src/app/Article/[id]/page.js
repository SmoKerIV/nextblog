import { Container } from "@/app/Components/Container/Container";
import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/Header";
import Image from "next/image";
import styles from "./page.module.css";
import dayjs from "dayjs";

async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function generateMetadata({ params }, parent) {
  const id = params.id;
  const data = await getData(id);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: data.blog.title,
    description: data.blog.description,
    openGraph: {
      images: [data.blog.photo_url, ...previousImages],
    },
  };
}

export default async function Article({ params }) {
  let data = await getData(params.id);
  const slicedContent = data.blog.content_text.slice(0, 800);
  return (
    <div>
      <Header />
      <Container>
        <div className={styles.head}>
          <div>
            <h1>{data.blog.title}</h1>
          </div>
          <div className={styles.desc}>
            <p>{data.blog.category}</p>
            <p className={styles.date}>
              {dayjs(data.blog.created_at).format("YYYY, MMM DD")}
            </p>
          </div>
        </div>
        <div className={styles.cover}>
          <Image src={data.blog.photo_url} alt={data.blog.title} fill={true} />
        </div>
        <div className={styles.content}>
          <p>{slicedContent}</p>
          <p className={styles.dots}>. . . . . . .</p>
        </div>
        <div
          className={styles.blog}
          dangerouslySetInnerHTML={{ __html: data.blog.content_html }}
        ></div>
      </Container>
      <Footer />
    </div>
  );
}
