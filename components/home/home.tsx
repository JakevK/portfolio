import { Title } from "../common/text/title";
import { Paragraph } from "../common/text/paragraph";
import { SkillBar } from "./skillBar/skillBar";

import Link from "next/link";
import styles from "./home.module.css";

import skillData from "./skillData.json";
import { ContactLinks } from "../common/contact/contactLinks";

export default function Home() {
  return (
    <>
      <Title>Hi, I&apos;m Jake</Title>
      <Paragraph>
        Welcome to my website! I&apos;m a Software Engineering student at the
        University of Canterbury with a passion for algorithmic problem solving.
        In my spare time I love building projects and participating in
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
      <ContactLinks />
    </>
  );
}
