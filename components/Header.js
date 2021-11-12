import Link from "next/Link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>FemiDevs</a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/Tech">
              <a>Events</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/Tech/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
