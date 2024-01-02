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
        break I&apos;m currently interning as a Software Engineer at{" "}
        <a href="https://seequent.com" target="_blank">Seequent</a> .
      </Paragraph>
      <Paragraph>
        In my spare time, I enjoy participating in <a href="https://clist.by/coder/jakevk/" target="_blank">
          competitive programming
        </a>. In
        the 2023{" "}
        <a href="https://nzprogcontest.org.nz/results/2023/" target="_blank">
          NZ Programming Contest
        </a>, my team placed 1st in our division (tertiary intermediate) and 3rd
        overall. I also like doing the LeetCode{" "}
        <a href="https://leetcode.com/contest" target="_blank">
          weekly contests
        </a>, for which I'm ranked in the top 0.5% of all 450,000+ competitors
        worldwide.
      </Paragraph>
      <Paragraph>
        When I'm not thinking about code, I love to get outdoors to go hiking,
        rock climbing, or adventuring of any kind. I'm an active member of the
        University of Canterbury Rock Climbing Club, for which I'm an executive
        committee member for 2024.
      </Paragraph>
      <Paragraph>
        Thanks for taking the time to stop by! Feel free to reach out if you'd
        like to connect or learn more:
      </Paragraph>
      <ContactLinks />
    </>
  );
}
