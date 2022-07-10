import { Post } from "../classes/Item";
import styles from './Card.module.css';
const Card = ({post}: {post: Post}) => {
    return <div className={styles.Card}>
        <div className={styles.postTitle}>{post.title}</div>
        <div>By: <em>{post.by}</em></div>
        <a href={post.url} target='_blank' className={styles.postUrl}>{post.url}</a>
        <div>{post.descendants} comments | {post.score} points</div>
    </div>
}

export default Card;