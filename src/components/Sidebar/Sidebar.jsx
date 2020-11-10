import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Friends from './Friends/Friends';
const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/profile" activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={styles.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={styles.active}>
            News
          </NavLink>
        </li>
        <li className="settings">
          <NavLink to="/settings" activeClassName={styles.active}>
            Settings
          </NavLink>
        </li>
      </ul>
      <Friends state={props.state}/>
    </div>
  );
}

export default Sidebar;