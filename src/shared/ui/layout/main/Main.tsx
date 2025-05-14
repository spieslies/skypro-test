import * as React from "react";
import type { TDefaultProps } from "../../../../app/types";

import styles from "./main.module.scss";

const Main: React.FC<TDefaultProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
