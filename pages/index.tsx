import Head from "next/head";
import { Layout } from "../components/common/layout/layout";
import Home from "../components/home/home";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi, I'm Jake. Welcome to my website! I'm a Software Engineering student at the University of Canterbury, with a passion for algorithmic problem solving. In my spare time I love building projects and participating in competitive programming."
          key="desc"
        />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
