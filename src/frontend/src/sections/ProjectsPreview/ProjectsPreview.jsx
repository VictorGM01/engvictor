import styles from './ProjectsPreview.module.scss';
import LinkSection from '../../components/common/Link/Link';
import projects from '../../data/projects/projects.json';
import CardProject from '../../components/common/CardProject/CardProject';
import {Link} from 'react-router-dom';


export default function ProjectsPreview() {
  return (
    <section className={styles.projectsPreview}>
      <LinkSection nome='Projects'/>
      {projects.map((project, index) => (
        <CardProject key={index} project={project} />
      ))}
      <Link to='/projects' className={styles.projectsPreview__link}>Ver mais</Link>
    </section>
  );
}