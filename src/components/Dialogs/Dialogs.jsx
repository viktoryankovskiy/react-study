import styles from './Dialogs.module.css';
import DialogList from './DialogList/DialogList';
import Message from './Message/Message';
import New_Message from './New_Message/New_Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map( (dialog) => <DialogList name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
  let messagesElements = props.state.messages.map( (message) => <Message message={message.message} id={message.id}/>);
  return(
    <div className={styles.dialog_content}>
      <h2>Dialogs</h2>
      <ul className={styles.dialogs}>
        {dialogsElements}
      </ul>
      <div className={styles.messages}>
        <div className="messages-wrapper">
          {messagesElements}
        </div>
        <New_Message
          newMessageText={props.state.newMessageText}
          sendMessage={props.sendMessage}
          updateNewMessageText={props.updateNewMessageText} />
      </div>
    </div>
  );
}

export default Dialogs;