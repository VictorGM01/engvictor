import styles from "./ProjectsPreview.module.scss";
import LinkSection from "../../components/common/Link/Link";
import projects from "../../data/projects/projects.json";
import CardProject from "../../components/common/CardProject/CardProject";
import { Link } from "react-router-dom";

export default function ProjectsPreview() {
  const projectsFilter = projects.slice(0, 3);

  return (
    <section className={styles.projectsPreview} id="projects">
      <LinkSection nome="Projects" />
      <div className={styles.projectsPreview__item}>
        {projectsFilter.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
      <Link to="/projects" className={styles.projectsPreview__link}>
        Ver mais
      </Link>
    </section>
  );
}
