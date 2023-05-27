import { ProjectCard } from "./projectCard/projectCard";
import styles from "./projects.module.css";
import { Title } from "../common/text/title";

import projectData from "./projectData.json";
import { Paragraph } from "../common/text/paragraph";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        {projectData.projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            description={project.description}
            tags={project.tags}
            github={project.github}
            image={project.image}
            website={project.website}
          />
        ))}
      </div>
    </>
  );
}
