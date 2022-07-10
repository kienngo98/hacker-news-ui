import { Post } from "../classes/Item";
import styles from "./Card.module.css";
const Card = ({ post }: { post: Post }) => {
  return (
    <a className={styles.Card} target="_self">
      <div className={styles.postTitle}>{post.title}</div>
      <div>
        By: <em>{post.by}</em>
      </div>
      <a href={post.url} target="_blank" className={styles.postUrl}>
        {post.url}
      </a>
      <div>
        {post.descendants} comments | {post.score} points
      </div>
    </a>
  );
};

export default Card;
