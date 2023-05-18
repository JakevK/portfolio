import { FC, ReactElement } from "react";
import styles from "./text.module.css";

export const Title: FC<any> = ({ children }): ReactElement => {
  return <h2 className={styles.title}>{children}</h2>;
};
