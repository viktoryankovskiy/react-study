import styles from './Post.module.css';
import avatar from './../../../../avatar.png';
const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src={avatar}></img>
      <p>
        {props.message}
      </p>
      <span>like{props.likesCount}</span>
    </div>
  );
}

export default Post;