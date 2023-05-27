import { Layout } from "../components/common/layout/layout";
import Projects from "../components/projects/projects";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Here are a few of the projects I've worked on."
          key="desc"
        />
      </Head>
      <Layout pageTitle="Projects">
        <Projects />
      </Layout>
    </>
  );
}
