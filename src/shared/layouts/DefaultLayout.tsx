import * as React from "react";
import type { TDefaultProps } from "../../app/types";
import { Footer, Header, Main } from "../ui/layout";

import styles from "./default-layout.module.scss";

const DefaultLayout: React.FC<TDefaultProps> = ({ children }) => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
