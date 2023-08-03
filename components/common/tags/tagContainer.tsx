import { FC, ReactElement } from "react";
import styles from "./tags.module.css";

export const TagContainer: FC<any> = ({
  tags,
}: {
  tags: string[];
}): ReactElement => {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag, i) => (
        <span className={styles.tag} key={i}>
          {tag}
        </span>
      ))}
    </div>
  );
};
