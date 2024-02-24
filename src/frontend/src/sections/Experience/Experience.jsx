import { useState } from 'react';
import styles from './Experience.module.scss';
import Link from '../../components/common/Link/Link';
import experiences from '../../data/experiences/experiences.json';

export default function Experience() {
  const [openItemId, setOpenItemId] = useState(1);

  const handleItemClick = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const geraItens = () => {
    return experiences.map((experience) => (
      <li key={experience.id} className={styles.experience__item}>
        <div
          onClick={() => handleItemClick(experience.id)}
          className={`${styles.experience__header} ${openItemId === experience.id ? styles.experience__highlight : ''}`}
        >
          <img src={experience.logo} alt={experience.empresa} />
          <p>{experience.empresa}</p>
        </div>
        {openItemId === experience.id && (
          <article className={styles.experience__card}>
            <div style={{ display: "block", width: "100%" }}>
              <h1>{experience.cargo}</h1>
              <p>{experience.dataInicio} - {experience.dataFim}</p>
            </div>
            <p className={styles.experience__desc}>{experience.descricao}</p>
            <span>
              <p>Tecnologias utilizadas:</p>
              <section>
                {experience.tecnologias.map((tecnologia) => (
                  <img src={`/${tecnologia}.svg`} alt={tecnologia} key={tecnologia} title={`${tecnologia}`} />
                ))}
              </section>
            </span>
          </article>
        )}
      </li>
    ));
  };

  return (
    <section className={styles.experience} id="experience">
      <Link nome="Experiências" />
      <div className={styles.experience__container}>
        <ul>
          {geraItens()}
        </ul>
      </div>
    </section>
  );
}