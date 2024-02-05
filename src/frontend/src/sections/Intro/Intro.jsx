import styles from './Intro.module.scss'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <p>
        Software Engineering. <br /> Data science. <br /> Clean code and architecture. <br /> This is not <span>my job</span>, it is <span>my passion!</span>
      </p>
    </section>
  )
}