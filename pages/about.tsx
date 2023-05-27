import { Layout } from "../components/common/layout/layout";
import About from "../components/about/about";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi, I'm Jake. I'm a Software Engineering student at the University of Canterbury. I'm in my second year here, but I've been programming since before I started High School! Over the years, I've developed proficiency in several languages, including C++, Python, JavaScript and Java."
          key="desc"
        />
      </Head>
      <Layout pageTitle="About">
        <About />
      </Layout>
    </>
  );
}
