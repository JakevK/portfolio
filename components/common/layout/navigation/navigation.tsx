import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import navigationLinks from "./navigationLinks.json";
import styles from "./navigation.module.css";

interface LinkData {
  url: string;
  name: string;
}
const links: LinkData[] = navigationLinks.links;

export const Navigation: FC = (): ReactElement => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.navContainer}>
        <ul className={styles.list}>
          {links.map((link, index) => (
            <Link key={index} href={link.url}>
              <li
                className={`${styles.listItem} ${
                  link.url == router.pathname ? styles.listItemActive : ""
                }`}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};
