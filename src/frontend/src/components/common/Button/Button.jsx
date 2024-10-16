import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button({
  nome,
  link,
  button = false,
  type = "button",
}) {
  return button ? (
    <button type={type} className={`${styles.button} ${styles["button-link"]}`}>
      {nome}
    </button>
  ) : (
    <a href={link} className={`${styles.button} ${styles["button-link"]}`}>
      {nome}
    </a>
  );
}

Button.propTypes = {
  nome: PropTypes.string.isRequired,
  link: PropTypes.string,
  button: PropTypes.bool,
  type: PropTypes.string,
};
