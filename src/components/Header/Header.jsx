import logo from './../../logo.svg';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className="logo">
        <img src={logo}></img>
      </a>
    </header>
  );
}

export default Header;