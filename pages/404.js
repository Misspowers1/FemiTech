import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/404.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.error1}>
      <Layout title="Page Not Found">
        <div className={styles.error}>
          <h1>404</h1>
          <h3>Sorry there is nothing here!</h3>
          <Link href="/">Go back to Home page</Link>
        </div>
      </Layout>
    </div>
  );
}
