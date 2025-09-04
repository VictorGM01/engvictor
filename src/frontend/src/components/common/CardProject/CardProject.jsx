import styles from "./CardProject.module.scss";
import PropTypes from "prop-types";
import { Lens } from "../Lens/Lens";

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
        <div className={styles.card__image}>
          <Lens
            zoomFactor={1.6}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${project.imagem})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
              }}
            ></div>
          </Lens>
        </div>

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
