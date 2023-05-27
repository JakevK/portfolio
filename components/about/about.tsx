import { Paragraph } from "../common/text/paragraph";
import { Title } from "../common/text/title";
import Link from "next/link";
import { ContactLinks } from "../common/contact/contactLinks";

export default function About() {
  return (
    <>
      <Title>About me</Title>
      <Paragraph>
        Hi, I&apos;m Jake. I&apos;m a Software Engineering student at the
        University of Canterbury. I&apos;m in my second year here, but I&apos;ve
        been programming since before I started High School! Over the years,
        I&apos;ve developed proficiency in several languages, including C++,
        Python, JavaScript and Java.
      </Paragraph>
      <Paragraph>
        Aside from using code to build things, I enjoy practicing Competitive
        Programming. In 2022, I competed in{" "}
        <a href="https://icpc.global/" target="_blank">
          ICPC
        </a>{" "}
        for the first time and qualified for the South Pacific Regional Finals.
        I had to compete alone due to my teammates having COVID-19, so I was
        quite happy with this result!
      </Paragraph>
      <Paragraph>
        When I&apos;m not writing code, I love to get outdoors for tramping,
        rock climbing, or any other sort of adventure. I especially enjoy
        bouldering, and I&apos;m an active member of my university&apos;s rock
        climbing club.
      </Paragraph>
      <Paragraph>
        Thanks for visiting my website! Please feel free to reach out if
        you&apos;d like to connect or learn more:
      </Paragraph>
      <ContactLinks />
    </>
  );
}
