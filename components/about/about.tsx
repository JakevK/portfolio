import { Paragraph } from "../common/text/paragraph";
import { Title } from "../common/text/title";
import { ContactLinks } from "../common/contact/contactLinks";

export default function About() {
  return (
    <>
      <Title>About me</Title>
      <Paragraph>
        Hi, I&apos;m Jake. I&apos;m a Software Engineering student at the
        University of Canterbury, graduating Nov 2025. Over the 2023/24 summer
        break I interned as a Software Engineer at{" "}
        <a href="https://seequent.com" target="_blank">Seequent</a>, and I also tutor part-time for the UC computer science department.
      </Paragraph>
      <Paragraph>
        In my spare time, I enjoy participating in <a href="https://clist.by/coder/jakevk/" target="_blank">
          competitive programming
        </a>. In
        the 2023{" "}
        <a href="https://nzprogcontest.org.nz/results/2023/" target="_blank">
          NZ Programming Contest
        </a>, my team placed 1st in our division (tertiary intermediate) and 3rd
        overall. I also like doing the{" "}
        <a href="https://leetcode.com/jakevk" target="_blank">
          LeetCode
        </a> weekly contests, for which I&apos;m ranked in the top 0.5% of all 500,000+ competitors
        worldwide.
      </Paragraph>
      <Paragraph>
        When I&apos;m not thinking about software, I love to get outdoors to go hiking,
        rock climbing, or adventuring of any kind. I&apos;m an active member of the
        University of Canterbury Climbing Club, for which I&apos;m an executive
        committee member for 2024.
      </Paragraph>
      <Paragraph>
        Thanks for taking the time to stop by! Feel free to reach out if you&apos;d
        like to connect or learn more:
      </Paragraph>
      <ContactLinks />
    </>
  );
}
