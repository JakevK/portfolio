import { FC, ReactElement } from "react";
import Head from "next/head";
import { Header } from "@/components/common/layout/header/header";
import { Navigation } from "@/components/common/layout/navigation/navigation";
import styles from "./layout.module.css";

interface Props {
  children: ReactElement;
}

const siteTitle = "Jake van Keulen";

export const Layout: FC<Props> = ({ children }): ReactElement => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.png" />
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};
