import { FC, ReactElement } from "react";
import styles from "./text.module.css";

export const Paragraph: FC<any> = ({ children }): ReactElement => {
  return <p className={styles.paragraph}>{children}</p>;
};
