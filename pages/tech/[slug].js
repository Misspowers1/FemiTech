import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Tech.module.css";

export default function BlogPage(props) {
  const titleName = props.tech.name.split(" ");
  const deleteTech = () => {
    console.log("delete tech");
  };
  return (
    <Layout title={`${titleName[0]} ${titleName[1]}`}>
      <div className={styles.main}>
        <div className={styles.controls}>
          <Link href={`tech/edit/ ${props.tech.id}`}>
            <a className={styles.edit}>
              <FaPencilAlt /> Edit Blog
            </a>
          </Link>
          <a href="#" onClick={deleteTech} className={styles.delete}>
            <FaTimes /> Delete Blog
          </a>
        </div>
        <span>
          By {props.tech.author} on {props.tech.date}
        </span>
        <h1> {props.tech.name} </h1>
        {props.tech.image && (
          <div className={styles.image}>
            <Image src={props.tech.image} width={960} height={600} />
          </div>
        )}
        <p> {props.tech.description} </p>
        <p> {props.tech.details} </p>
        <Link href="/">
          <a className={styles.back}>Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/tech/${slug}`);
  const tech = await res.json();

  return {
    props: { tech: tech[0] },
  };
}
