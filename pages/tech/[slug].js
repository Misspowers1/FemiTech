import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";

export default function BlogPage(props) {
  const titleName = props.techEdna.name.split(" ");
  return (
    <Layout title={`${titleName[0]} ${titleName[1]}`}>
      <h1> {props.techEdna.name} </h1>
    </Layout>
  );
}
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/tech/${slug}`);
  const tech = await res.json();

  return {
    props: { techEdna: tech[0] },
  };
}
