import styles from "./CardProject.module.scss";
import PropTypes from "prop-types";

export default function CardProject({ project }) {
  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <a
      className={styles.card}
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <div
          className={styles.card__image}
          style={{
            backgroundImage: `url(${project.imagem})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className={styles.card__description}>
          <h3>{project.nome}</h3>

          <p dangerouslySetInnerHTML={createMarkup(project.descricao)}></p>
        </div>
      </div>
      <div className={styles.card__infos}>
        <div>
          <img src="/calendario.svg" alt="Data" />
          <span>{project.data}</span>
        </div>
        <div>
          <img src="/commit.svg" alt="Quantidade de commits" />
          <span>{project.commits} commits</span>
        </div>
      </div>
    </a>
  );
}

CardProject.propTypes = {
  project: PropTypes.object.isRequired,
};
