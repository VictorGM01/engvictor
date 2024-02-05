import styles from './Button.module.scss'

export default function Button({ nome, link }) {
  return (
    <a href={link} className={styles.button}>
      {nome}
    </a>
  )
}