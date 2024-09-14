import styles from "./ProjectsPreview.module.scss";
import LinkSection from "../../components/common/Link/Link";
import projects from "../../data/projects/projects.json";
import CardProject from "../../components/common/CardProject/CardProject";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProjectsPreview() {
  const { t } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) =>
      Math.min(prevVisibleProjects + 3, projects.length)
    );
  };

  return (
    <section className={styles.projectsPreview} id="projects">
      <LinkSection nome={t("projetos.titulo")} />
      <div className={styles.projectsPreview__item}>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <CardProject
            key={index}
            project={{
              ...project,
              nome: t(
                `projetos.${project.nome
                  .replace(/\s+/g, "")
                  .toLowerCase()}.nome`
              ),
              descricao: t(
                `projetos.${project.nome
                  .replace(/\s+/g, "")
                  .toLowerCase()}.descricao`
              ),
            }}
          />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <button
          onClick={handleShowMore}
          className={styles.projectsPreview__link}
        >
          {t("projetos.verMais")}
        </button>
      )}
    </section>
  );
}
