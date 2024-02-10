import styles from './Technologies.module.scss';
import Link from '../../components/common/Link/Link';
import technologies from '../../data/technologies/technologies.json';


export default function Technologies() {
  return (
    <section className={styles.technologies} id="technologies">
      <Link nome='Tencnologias' />
      <div className={styles.technologies__container}>
      {technologies.map((technology) => (
        <div key={technology.area} className={styles.technologies__area}>
          <div className={styles.technologies__area__container}>
          <img src={technology.imagem} alt={technology.area} className={styles.technologies__area__imagem}/>
          
          <div className={styles.technologies__area__container_info}>
            <h3 className={styles.technologies__area__title}>{technology.area}</h3>
            <div className={styles.technologies__area__logos}>
              {technology.tecnologias.map((tech) => (
                <img
                  key={tech}
                  src={`${tech}.svg`}
                  alt={tech}
                  className={styles.technologies__area__logos__logo}
                  title={`Logo da tecnologia: ${tech}`}
                />
              ))}
            </div>
          </div>
          </div>
          
          <span className={styles.technologies__line}>
            <img src="/line.png" alt={technology.area} className={styles.technologies__area__imagem}/>
          </span>
          <hr />
        </div>
      ))}</div>
    </section>
  );
}