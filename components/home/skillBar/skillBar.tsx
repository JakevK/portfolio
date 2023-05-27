import { FC, ReactElement } from "react";
import styles from "./skillBar.module.css";

interface Props {
  name: string;
  level: number;
}

export const SkillBar: FC<Props> = ({ name, level }): ReactElement => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.details}>
          <span>{name}</span>
          <span>{level}%</span>
        </div>
        <div className={styles.bar}>
          <div style={{ width: level + "%" }} />
        </div>
      </div>
    </>
  );
};
