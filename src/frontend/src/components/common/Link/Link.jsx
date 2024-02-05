import styles from './Link.module.scss'

export default function Link({ nome }) {
  return (
    <div className={styles.link}>
      <p>{nome}</p>
    </div>
  )
}