"use client";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { Container } from "./Components/Container/Container";
import { Card } from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);

  const getData = () => {
    fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?limit=9&offset=${skip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs([...blogs, ...data.blogs]);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, [skip]);
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
        <div className={styles.over}>
          <InfiniteScroll
            dataLength={blogs.length}
            next={() => {
              setSkip(skip + 9);
            }}
            hasMore={true}
            className={styles.over}
          >
            {loading && (
              <div className={styles.loading}>
                {" "}
                <span className={styles.loader}></span>
              </div>
            )}
            <div className={styles.grid}>
              {blogs.map((blog, i) => (
                <Card key={i} blog={blog} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </Container>
      <Footer />
    </div>
  );
}