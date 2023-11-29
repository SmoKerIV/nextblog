"use client";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { Container } from "./Components/Container/Container";
import { Card } from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getData = async (pageNumber) => {
    try {
      const res = await fetch(
        `https://api.slingacademy.com/v1/sample-data/blog-posts?page=${pageNumber}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setBlogs((prevBlogs) => [...prevBlogs, ...data.blogs]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

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
        {loading && (
          <div className={styles.loading}>
            <span className={styles.loader}></span>
          </div>
        )}
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
