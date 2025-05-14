import type { TDefaultProps } from "../../../app/types";
import styles from './button.module.scss'

type TButton = {
  onClick: () => void 
}

const Button: React.FC<TButton & TDefaultProps> = ({ children, onClick }) => {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
};

export default Button;