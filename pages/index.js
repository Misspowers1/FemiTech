import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
import TechItem from "../components/TechItem";
import Link from "next/link";
import { API_URL } from "../config/index";

export default function HomePage(props) {
  console.log(props.tech);
  return (
    <Layout title="Tech Blog">
      <div className={styles.info}>
        <h1>BlogVolution</h1>
        <p>
          Professionals in almost every industry have trouble keeping up to date
          with changing tech trends. So, the best and the only way to stay
          relevant with technology is through the information available online!
          So, if you want intuitive articles along with insights from the tech
          industry, you need to read blogs that are consistently updated by
          people that know about the trends, market, and care about giving
          quality content to their readers.
        </p>
        <p>
          What are some of your favorite resources when expanding your knowledge
          of the IT space? Do you turn to books, white papers, social media
          groups, YouTube videos? No matter what it is, your readers will
          appreciate a blog recommending other outlets they can rely on to learn
          more. Think about a set of blogs you've already written on similar
          topics, these also make a great CTA resource for lead gen purposes.
          Just package them together, create a table of contents, and add an
          intro to discuss your topics. Bam, done.
        </p>
      </div>
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
      <div className={styles.main}>
        <h1>Featured Posts</h1>
        {props.tech.map((tech) => {
          return <TechItem key={tech.id} techData={tech} />;
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/tech`);
  const tech = await res.json();

  return {
    props: { tech },
  };
}
