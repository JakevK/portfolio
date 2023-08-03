import { FC, ReactElement } from "react";
import Image from "next/image";
import styles from "./projectCard.module.css";
import { Paragraph } from "../../common/text/paragraph";
import { Title } from "../../common/text/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { TagContainer } from "../../common/tags/tagContainer";

interface Props {
  name: string;
  description: string[];
  tags: string[];
  github: string;
  image: string;
  website?: string;
}

export const ProjectCard: FC<Props> = ({
  name,
  description,
  tags,
  github,
  image,
  website = null,
}): ReactElement => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={image}
          width={500}
          height={500}
          alt={name}
          className={styles.image}
        />
        <Title>{name}</Title>
        {description.map((section, i) => (
          <Paragraph key={i}>{section}</Paragraph>
        ))}
      </div>
      <div>
        <div className={styles.links}>
          <a href={github} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
          {website && (
            <a href={website} target="_blank">
              <FontAwesomeIcon icon={faLink} />
              Website
            </a>
          )}
        </div>
        <TagContainer tags={tags} />
      </div>
    </div>
  );
};
