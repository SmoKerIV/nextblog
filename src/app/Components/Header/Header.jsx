import styles from "./Header.module.css";
import Link from "next/link";
import { Container } from "../Container/Container";

export default function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.head}>
          <div>
            <h2>Aon 2023</h2>
          </div>
          <div className={styles.nav}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/help">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
