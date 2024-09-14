import { useState } from "react";
import styles from "./Technologies.module.scss";
import Link from "../../components/common/Link/Link";
import technologies from "../../data/technologies/technologies.json";
import { useTranslation } from "react-i18next";

export default function Technologies() {
  const [openItemId, setOpenItemId] = useState("Banco de Dados");
  const [selectedTech, setSelectedTech] = useState(null);
  const { t } = useTranslation();

  const handleItemClick = (id) => {
    setOpenItemId(openItemId === id ? null : id);
    setSelectedTech(null);
  };

  const handleTechClick = (tech) => {
    setSelectedTech(selectedTech === tech ? null : tech);
  };

  const geraItens = () => {
    return technologies.map((technology) => (
      <li key={technology.area} className={styles.technologies__item}>
        <div
          onClick={() => handleItemClick(technology.area)}
          className={`${styles.technologies__header} ${
            openItemId === technology.area ? styles.technologies__highlight : ""
          }`}
        >
          <p>
            {t(
              `tecnologias.areas.${technology.area
                .replace(/\s+/g, "")
                .toLowerCase()}`
            )}
          </p>
        </div>
        {openItemId === technology.area && (
          <article className={styles.technologies__card}>
            {technology.tecnologias.map((tecnologia) => (
              <div
                key={tecnologia.nome}
                className={`${styles.technologies__card__item} ${
                  selectedTech === tecnologia.nome
                    ? styles.technologies__card__item__selected
                    : ""
                }`}
                onClick={() => handleTechClick(tecnologia.nome)}
              >
                <img
                  src={`/${tecnologia.src}.svg`}
                  alt={tecnologia.nome}
                  title={tecnologia.nome}
                  className={styles.technologies__image}
                />
                <span className={styles.technologies__card__item__name}>
                  {tecnologia.nome}
                </span>
              </div>
            ))}
          </article>
        )}
        {selectedTech && openItemId === technology.area && (
          <div className={styles.technologies__description}>
            <h2>{selectedTech}</h2>
            <p>
              {t(
                `tecnologias.descricoes.${technology.tecnologias
                  .find((tech) => tech.nome === selectedTech)
                  .src.toLowerCase()}`
              )}
            </p>
          </div>
        )}
      </li>
    ));
  };

  return (
    <section className={styles.technologies} id="technologies">
      <Link nome={t("tecnologias.titulo")} />
      <div className={styles.technologies__container}>
        <ul className={styles.technologies__list}>{geraItens()}</ul>
      </div>
    </section>
  );
}
