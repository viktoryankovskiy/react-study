import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  let postsElements = props.posts
      .map( (post) => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className="posts-wrapper">
      <h2>My posts</h2>
      <div className={styles.new_posts}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={styles.all_posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;