'use client';
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { Container } from "./Components/Container/Container";
import { Card } from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import { useState ,useEffect } from 'react';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

    const getData = () => {
      fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts`)
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data.blogs);
          setLoading(false);
        });
    };
    useEffect(() => {
      getData();
    }, []);
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.title}>
              <h1>Simple Blog.</h1>
              <p>A blog created by Aon 2023</p>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        {loading && <div className={styles.loading}> <span className={styles.loader}></span></div>}
        <div className={styles.grid}>
          {blogs.map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
