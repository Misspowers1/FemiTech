import Image from "next/image";
import styles from "../styles/TechItem.module.css";

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
        <span>{props.techData.date}</span>
        <h3>{props.techData.name}</h3>
        <h4>{props.techData.author}</h4>
        <p>{props.techData.description}</p>
      </div>
    </div>
  );
}
