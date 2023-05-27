import { FC, ReactElement } from "react";
import styles from "./footer.module.css";

export const Footer: FC = (): ReactElement => {
  return (
    <>
      <footer className={styles.container}>
        <span>
          I built this website with{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>
        </span>
        <span>|</span>
        <span>
          View source on{" "}
          <a href="https://github.com/JakevK/portfolio" target="_blank">
            GitHub
          </a>
        </span>
      </footer>
    </>
  );
};
