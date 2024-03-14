import { Title } from "../common/text/title";
import { Paragraph } from "../common/text/paragraph";

import skillData from "./skillData.json";

import Link from "next/link";
import { ContactLinks } from "../common/contact/contactLinks";
import { TagContainer } from "../common/tags/tagContainer";

export default function Home() {
  return (
    <>
      <Title>Hi, I&apos;m Jake</Title>
      <Paragraph>
        I&apos;m a Software Engineering student at the University of Canterbury,
        graduating Nov 2025. My hobbies include working on personal{" "}
        <Link href="/projects">projects</Link>,{" "}
          competitive programming, and rock climbing. Over the past summer I interned as a Software Engineer
        at <a href="https://seequent.com" target="_blank">Seequent</a>.{" "}
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
