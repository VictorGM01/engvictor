import styles from './Experience.module.scss'
import Link from '../../components/common/Link/Link'
import experiences from '../../data/experiences/experiences.json'

export default function Experience() {

  const geraItens = () => {
    return experiences.map((experience) => (
      <li key={experience.id}>
        <input type="checkbox" id={`check-${experience.id}`} />
        <label htmlFor={`check-${experience.id}`}>
        <div>
          <img src={experience.logo} alt={experience.empresa} />
          <p>
            {experience.empresa}
          </p>
        </div>
        <article className={styles.experience__card}>
          <h1>{experience.cargo}</h1>
          <p>{experience.dataInicio} - {experience.dataFim}</p>
          <p className={styles.experience__desc}>{experience.descricao}</p>
          <p>Tecnologias utilizadas:</p>
          <section>
            {experience.tecnologias.map((tecnologia) => (
              <img src={`/${tecnologia}.svg`} alt={tecnologia} key={tecnologia} />
            ))}
          </section>
        </article>
        </label>
      </li>
    ))}

  return (
    <section className={styles.experience} id="experience">
      <Link nome="Experiências" />
      <div className={styles.experience__container}>
        <ul>
          {geraItens()}
        </ul>
      </div>
    </section>
  )
}