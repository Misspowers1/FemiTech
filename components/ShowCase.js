import styles from "../styles/showcase.module.css";
import Link from "next/link";

export default function ShowCase() {
  return (
    <div className={styles.show}>
      <h1>Welcome to FemiDevs</h1>
      <h2>It's all about Tech</h2>
      <h3>Wednesday November 10th 2021</h3>
      <div className={styles.second}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a>UI/UX</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <a>Frontend Development</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <a>Backend Development</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <a>Database</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <a>Hosting And Deployment</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
