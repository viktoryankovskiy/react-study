// import { a } from 'react-router-dom';
import styles from './Friends.module.css';
const Friends = (props) => {
  let friendDate = props.state.friends.map( (friend) => 
    <li>
      <a href="/profile">
        <img src={friend.avatar} />
        {friend.name}
      </a>
    </li>)
  return (
    <div className={styles.friends}>
      <h2>Friends</h2>
      <ul>
        {friendDate}
      </ul>
    </div>
  );
}

export default Friends;