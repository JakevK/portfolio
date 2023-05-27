import { FC, ReactElement } from "react";
import Head from "next/head";
import { Header } from "./header/header";
import { Navigation } from "./navigation/navigation";
import styles from "./layout.module.css";
import { Footer } from "./footer/footer";

interface Props {
  children: ReactElement;
  pageTitle?: string;
}

const siteTitle = "Jake van Keulen";

export const Layout: FC<Props> = ({
  children,
  pageTitle = "",
}): ReactElement => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.png" />
        <title>{(pageTitle != "" ? pageTitle + " | " : "") + siteTitle}</title>
        <meta name="title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:image" content="/images/profile.png" />
      </Head>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
