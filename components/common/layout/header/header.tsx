import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import styles from "./header.module.css";

const titleText: string = "Jake van Keulen";

export const Header: FC = (): ReactElement => {
  return (
    <Link href="/" className={styles.container}>
      <Image
        src="/images/profile.png"
        width={100}
        height={100}
        alt={titleText}
        className={styles.profilePicture}
      />
      <div className={styles.title}>{titleText}</div>
    </Link>
  );
};
