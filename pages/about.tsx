import { Layout } from "../components/common/layout/layout";
import About from "../components/about/about";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi, I'm Jake. I'm a Software Engineering student at the University of Canterbury, graduating Nov 2025."
          key="desc"
        />
      </Head>
      <Layout pageTitle="About">
        <About />
      </Layout>
    </>
  );
}
