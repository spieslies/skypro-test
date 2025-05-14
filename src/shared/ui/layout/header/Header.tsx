import HeaderNav from "../../nav/HeaderNav";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src="" alt="Skypro.Wallet" />
        <HeaderNav />
        <div>Выйти</div>
      </div>
    </header>
  );
};

export default Header;
