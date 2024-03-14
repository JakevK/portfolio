import Head from "next/head";
import { Layout } from "../components/common/layout/layout";
import Home from "../components/home/home";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi, I'm Jake. I'm a Software Engineering student at the University of Canterbury, graduating Nov 2025."
          key="desc"
        />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
