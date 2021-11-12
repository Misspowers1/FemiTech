import styles from "../styles/Layout.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "../components/ShowCase";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      {router.pathname === "/" && <ShowCase />}
      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "FemiDevs",
  description: "Find the latest tech blogs here",
  keywords: "technology,UI/UX,frontend,backend,host&deploy,database,project",
};
