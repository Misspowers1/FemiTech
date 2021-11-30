import Image from "next/image";
import styles from "../styles/TechItem.module.css";
import Link from "next/link";

export default function TechItem(props) {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image
          src={props.techData.image ? props.techData.image : "/images/9.jpg"}
          width={270}
          height={200}
        />
      </div>
      <div className={styles.info}>
        <span>
          By {props.techData.author} on {props.techData.date}
        </span>
        <h3>{props.techData.name}</h3>
        <p>{props.techData.description}</p>
      </div>
      <div className={styles.link}>
        <Link href={`/tech/${props.techData.slug}`}>
          <a>Read More</a>
        </Link>
      </div>
    </div>
  );
}
