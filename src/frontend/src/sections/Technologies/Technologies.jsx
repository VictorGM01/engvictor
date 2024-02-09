import styles from './Technologies.module.scss';
import Link from '../../components/common/Link/Link';
import technologies from '../../data/technologies/technologies.json';


export default function Technologies() {
  return (
    <section className={styles.technologies} id="technologies">
      <Link nome='Tencnologias' />
      {technologies.map((technology) => (
        <div key={technology.area} className={styles.technologies__area}>
          <h3 className={styles.technologies__area__title}>{technology.area}</h3>
          <div className={styles.technologies__area__logos}>
            {technology.tecnologias.map((tech) => (
              <img
                key={tech}
                src={`${tech}.svg`}
                alt={tech}
                className={styles.technologies__area__logos__logo}
              />
            ))}
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}