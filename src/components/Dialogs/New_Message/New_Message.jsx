import React from 'react';
import styles from './New_Message.module.css';

const New_Message = (props) => {
  let newMessage = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  };
  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
  };

  return(
    <div className={styles.new_message}>
      <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
      <button onClick={sendMessage}>Add message</button>
    </div>
  );
}

export default New_Message;