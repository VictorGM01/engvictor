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
          {experience.descricao}
        </article>
        </label>
      </li>
    ))}

  return (
    <section className={styles.experience}>
      <Link nome="Experiências" />
      <div className={styles.experience__container}>
        <ul>
          {geraItens()}
        </ul>
      </div>
    </section>
  )
}