import { NavLink } from "react-router";
import type { TDefaultProps } from "../../../app/types";
import styles from "./header-nav.module.scss";

type THeaderNavLink = TDefaultProps & {
  to: string;
};

const HeaderNavLink = ({ to, children }: THeaderNavLink) => {
  return (
    <NavLink to={to} className={styles.headerNavLink}>
      {children}
    </NavLink>
  );
};

const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
      <HeaderNavLink to="/">Мои расходы</HeaderNavLink>
      <HeaderNavLink to="/analysis">Анализ расходов</HeaderNavLink>
    </nav>
  );
};

export default HeaderNav;
