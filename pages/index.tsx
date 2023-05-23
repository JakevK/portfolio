import { Paragraph } from "../components/common/text/paragraph";
import { Title } from "../components/common/text/title";
import { Layout } from "../components/common/layout/layout";

export default function HomePage() {
  return (
    <Layout>
      <>
        <Title>About me</Title>
        <Paragraph>
          Hi, I&apos;m Jake. I&apos;m a Software Engineering student at the
          University of Canterbury. I&apos;m in my second year here, but
          I&apos;ve been programming since before I started High School! I am
          proficient in several languages, including C++, Python, JavaScript and
          Java.
        </Paragraph>
        <Paragraph>
          In my spare time, I enjoy practicing Competitive Programming. In 2022,
          I competed in{" "}
          <a href="https://icpc.global/" target="_blank">
            ICPC
          </a>{" "}
          for the first time and qualified for the South Pacific Regional
          Finals. I had to compete alone due to my teammates having COVID-19, so
          I was quite happy with this result!
        </Paragraph>
        <Paragraph>
          When I&apos;m not writing code, I&apos;m probably out climbing rocks.
          I&apos;m an avid boulderer, and an active member of my
          University&apos;s rock climbing club.
        </Paragraph>
        <Paragraph>
          Thanks for visiting my website! Please feel free to reach out if
          you&apos;d like to connect or learn more.
        </Paragraph>
      </>
    </Layout>
  );
}
