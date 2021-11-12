import Link from "next/Link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; FemiDevs 2021</p>
      <p>
        <span>
          <Link href="/about">About Tech Blogs</Link>
        </span>
      </p>
    </footer>
  );
}
