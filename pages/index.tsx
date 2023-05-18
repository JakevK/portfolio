import { Paragraph } from "@/components/common/text/paragraph";
import { Title } from "@components/common/text/title";
import { Layout } from "@components/common/layout/layout";

export default function HomePage() {
  return (
    <Layout>
      <>
        <Title>About me</Title>
        <Paragraph>
          Hi, I'm Jake. I'm a Software Engineering student at the University of
          Canterbury. I'm in my second year here, but I've been programming
          since before I started High School! I am proficient in several
          languages, including C++, Python, JavaScript and Java.
        </Paragraph>
        <Paragraph>
          In my spare time, I enjoy practicing Competitive Programming. In 2022,
          I competed in{" "}
          <a href="https://icpc.global/" target="_blank">
            ICPC
          </a>{" "}
          for the first time and qualified for the South Pacific Regional
          Finals, overcoming the absence of my team members, who had COVID-19.
        </Paragraph>
        <Paragraph>
          When I'm not writing code, I'm probably out climbing rocks. I'm an
          avid boulderer, and an active member of my University's rock climbing
          club.
        </Paragraph>
        <Paragraph>
          Thanks for visiting my website! Please feel free to reach out if you'd
          like to connect or learn more.
        </Paragraph>
      </>
    </Layout>
  );
}
