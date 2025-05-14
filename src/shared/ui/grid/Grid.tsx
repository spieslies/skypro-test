import type { TDefaultProps } from "../../../app/types";
import styles from "./grid.module.scss";

const Grid: React.FC<TDefaultProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
