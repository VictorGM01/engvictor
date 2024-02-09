import PropTypes from 'prop-types';
import styles from './Link.module.scss';

export default function Link({ nome }) {
  return (
    <div className={styles.link}>
      <p>{nome}</p>
    </div>
  );
}

Link.propTypes = {
  nome: PropTypes.string.isRequired,
};
