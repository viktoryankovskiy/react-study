import styles from './Message.module.css';
import avatar from './../../../avatar.png';

const Message = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.user}>
        <img src={avatar}></img>
        Ivan
      </div>
      <div className={styles.text}>
        {props.message}
      </div>
    </div>
  );
}

export default Message;