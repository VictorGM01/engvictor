import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button({
  nome,
  link,
  button = false,
  type = "button",
  onClick,
  size = "normal",
}) {
  const buttonClass = `${styles.button} ${styles["button-link"]} ${
    size === "small" ? styles["button-small"] : ""
  }`;

  return button ? (
    <button type={type} className={buttonClass} onClick={onClick}>
      {nome}
    </button>
  ) : (
    <a href={link} className={buttonClass}>
      {nome}
    </a>
  );
}

Button.propTypes = {
  nome: PropTypes.string.isRequired,
  link: PropTypes.string,
  button: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["normal", "small"]),
};
