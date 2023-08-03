import { FC, ReactElement } from "react";
import styles from "./contact.module.css";
import { Paragraph } from "../text/paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const ContactLinks: FC = (): ReactElement => {
  return (
    <Paragraph>
      <div className={styles.contactLinks}>
        <a href="mailto:jakevankeulen@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>
        <a href="https://github.com/JakevK" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jakevk" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
      </div>
    </Paragraph>
  );
};
