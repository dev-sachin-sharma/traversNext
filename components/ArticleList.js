import Styles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={Styles.grid}>
      {articles.map((data) => {
        return <ArticleItem key={data.id} article={data}/>
      })}
    </div>
  );
};

export default ArticleList;
