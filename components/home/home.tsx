import { Title } from "../common/text/title";
import { Paragraph } from "../common/text/paragraph";

import skillData from "./skillData.json";

import Link from "next/link";
import styles from "./home.module.css";

import { ContactLinks } from "../common/contact/contactLinks";
import { TagContainer } from "../common/tags/tagContainer";

export default function Home() {
  return (
    <>
      <Title>Hi, I&apos;m Jake</Title>
      <Paragraph>
        Welcome to my website! I&apos;m a Software Engineering student at the
        University of Canterbury, expecting to graduate at the end of 2025. In
        my spare time I love building projects and participating in competitive
        programming.
      </Paragraph>
      <Paragraph>
        <Link href="/about">More about me ➜</Link>
      </Paragraph>
      <Title>Contact</Title>
      <Paragraph>
        Feel free to reach out through any of the following:
      </Paragraph>
      <ContactLinks />
      <Title>Skills</Title>
      {Object.keys(skillData).map((category: string) => (
        <div key={category}>
          <Paragraph>
            <TagContainer
              tags={skillData[category as keyof typeof skillData]}
            />
          </Paragraph>
        </div>
      ))}
    </>
  );
}
