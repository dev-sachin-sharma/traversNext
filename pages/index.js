import Head from "next/head";
import ArticleList from "../components/ArticleList";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  return {
    props: { post: data },
  };
};

export default function Home({ post }) {
  return (
    <div>
      <Head>
        <title>Sachin||News</title>
        <meta name="keywords" content="latest news" />
      </Head>
      <ArticleList articles={post} />

      <h1>hey</h1>
    </div>
  );
}
