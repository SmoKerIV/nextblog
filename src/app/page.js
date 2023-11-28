import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import { Container } from "./Components/Container/Container";
import { Card } from "./Components/Card/Card";

const list = [{}, {}, {}, {}, {}, {}];
export default function Home() {
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
        {list.map((el, i) => (
          <Card />
        ))}
      </Container>
    </div>
  );
}
