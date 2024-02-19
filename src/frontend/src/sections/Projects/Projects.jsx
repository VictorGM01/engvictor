import styles from './Projects.module.scss';
import Link from '../../components/common/Link/Link';
import projects from '../../data/projects/projects.json';
import CardProject from '../../components/common/CardProject/CardProject';
import GoBack from "../../components/common/GoBack/GoBack";


export default function Projects() {
  return (
    <section className={styles.projects}>
      <GoBack />
      <Link nome='Projetos' />
      <hr />
      <div className={styles.projects__container}>
      {projects.map((project, index) => (
        <CardProject key={index} project={project} />
      ))}
      </div>
    </section>
  );
}