import PropTypes from 'prop-types';
import styles from './Button.module.scss'

export default function Button({ nome, link }) {
  return (
    <a href={link} className={styles.button}>
      {nome}
    </a>
  )
}

Button.propTypes = {
  nome: PropTypes.string.isRequired,
  link: PropTypes.string,
}
