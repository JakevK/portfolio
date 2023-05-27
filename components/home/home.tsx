import { Title } from "../common/text/title";
import { Paragraph } from "../common/text/paragraph";
import { SkillBar } from "./skillBar/skillBar";

import Link from "next/link";
import styles from "./home.module.css";

import skillData from "./skillData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Title>Hi, I&apos;m Jake</Title>
      <Paragraph>
        Welcome to my website! I&apos;m a Software Engineering student with a
        passion for problem solving and writing code. In my spare time I love to
        build personal <Link href="/projects">projects</Link> and participate in
        competitive programming.
      </Paragraph>
      <Paragraph>
        <Link href="/about">More about me ➜</Link>
      </Paragraph>
      <Title>Languages</Title>
      <Paragraph>
        <div className={styles.skillsList}>
          {skillData.skills.map((skill, i) => (
            <SkillBar key={i} name={skill.name} level={skill.level} />
          ))}
        </div>
      </Paragraph>
      <Title>Contact</Title>
      <Paragraph>
        Feel free to reach out through any of the following:
      </Paragraph>
      <Paragraph>
        <div className={styles.contactLinks}>
          <a href="mailto:jakevankeulen@gmail.com" target="blank">
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </a>
          <a href="https://github.com/JakevK" target="blank">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </div>
      </Paragraph>
    </>
  );
}
