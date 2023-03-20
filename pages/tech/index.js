import Layout from "../../components/Layout";
import styles from "../../styles/index.module.css";
import ShowCase from "../../components/ShowCase";
import { API_URL } from "../../config/index";

export default function HomePage(props) {
	console.log(props.tech);
	return (
		<Layout title="Tech Blog">
			<ShowCase />
			<div className={styles.main}>
				<h1>Featured Posts</h1>
				{props.tech.map((tech) => {
					return <techItem key={tech.id} techData={tech} />;
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
