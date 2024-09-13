import { useState } from "react";
import styles from "./Experience.module.scss";
import Link from "../../components/common/Link/Link";
import experiences from "../../data/experiences/experiences.json";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  const [openItemId, setOpenItemId] = useState(1);

  const handleItemClick = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const geraItens = () => {
    return experiences.map((experience) => (
      <li key={experience.id} className={styles.experience__item}>
        <div
          onClick={() => handleItemClick(experience.id)}
          className={`${styles.experience__header} ${
            openItemId === experience.id ? styles.experience__highlight : ""
          }`}
        >
          <img src={experience.logo} alt={experience.empresa} />
          <p>{experience.empresa}</p>
        </div>
        {openItemId === experience.id && (
          <article className={styles.experience__card}>
            <div>
              <div style={{ display: "block", width: "100%" }}>
                {/* Utilize chaves de tradução para cargos */}
                <h1>
                  {t(
                    `experiencia.cargos.${experience.cargo.replace(/\s/g, "")}`
                  )}
                </h1>
                <span>
                  {experience.dataInicio} - {experience.dataFim}
                </span>
              </div>
              {/* Utilize chaves de tradução para descrições */}
              <p className={styles.experience__desc}>
                {t(
                  `experiencia.descricoes.${experience.empresa
                    .replace(/\s/g, "")
                    .toLowerCase()}${
                    experience.id === 1 ? "1" : experience.id === 5 ? "2" : ""
                  }`
                )}
              </p>
              <span>
                <p>{t("experiencia.tecnologiasUtilizadas")}</p>
                <section>
                  {experience.tecnologias.map((tecnologia) => (
                    <img
                      src={`/${tecnologia}.svg`}
                      alt={tecnologia}
                      key={tecnologia}
                      title={`${tecnologia}`}
                    />
                  ))}
                </section>
              </span>
            </div>
          </article>
        )}
      </li>
    ));
  };

  return (
    <section className={styles.experience} id="experience">
      <Link nome={t("experiencia.titulo")} />
      <div className={styles.experience__container}>
        <ul>{geraItens()}</ul>
      </div>
    </section>
  );
}
