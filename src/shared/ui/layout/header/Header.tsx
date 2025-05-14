import HeaderNav from "../../nav/HeaderNav";
import styles from "./header.module.scss";
import logo from '../../../../app/assets/logo.svg'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Skypro.Wallet" />
        <HeaderNav />
        <div>Выйти</div>
      </div>
    </header>
  );
};

export default Header;
