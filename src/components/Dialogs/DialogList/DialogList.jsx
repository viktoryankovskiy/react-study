import styles from './DialogList.module.css';
import avatar from './../../../avatar.png';
import { NavLink } from 'react-router-dom';

const DialogList = (props) => {
  return (
    <li className={styles.list_item}>
      <NavLink activeClassName={styles.active} to={"/dialogs/" + props.id}>
        <img src={props.avatar}></img>
        {props.name}
      </NavLink>
    </li>
  );
}

export default DialogList;