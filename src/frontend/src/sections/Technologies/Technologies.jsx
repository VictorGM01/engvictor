import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Technologies.module.scss";
import Link from "../../components/common/Link/Link";
import Button from "../../components/common/Button/Button";
import technologies from "../../data/technologies/technologies.json";
import { useTranslation } from "react-i18next";

function TechnologyCard({ tech }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className={styles.technologies__card_wrapper}>
      <motion.div
        className={styles.technologies__card}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.technologies__card__content}>
          <img
            src={`/${tech.src}.svg`}
            alt={tech.nome}
            title={tech.nome}
            className={styles.technologies__image}
          />
          <span className={styles.technologies__name}>{tech.nome}</span>
          <span className={styles.technologies__area}>{tech.area}</span>
        </div>
      </motion.div>

      {isOpen && (
        <div className={styles.technologies__tooltip}>
          <h3>{tech.nome}</h3>
          <p>
            {t(
              `tecnologias.descricoes.${tech.src.toLowerCase()}`
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Technologies() {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(12); // 2 linhas x 6 colunas (aproximadamente)

  // Flatten all technologies from all areas into a single array
  const allTechnologies = technologies.flatMap((area) =>
    area.tecnologias.map((tech) => ({
      ...tech,
      area: area.area,
    }))
  );

  const visibleTechnologies = allTechnologies.slice(0, visibleCount);
  const hasMore = visibleCount < allTechnologies.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, allTechnologies.length));
  };

  return (
    <section className={styles.technologies} id="technologies">
      <Link nome={t("tecnologias.titulo")} />
      <div className={styles.technologies__container}>
        <div className={styles.technologies__grid}>
          {visibleTechnologies.map((tech) => (
            <TechnologyCard key={tech.nome} tech={tech} />
          ))}
        </div>
        
        {hasMore && (
          <div className={styles.technologies__showMore}>
            <Button
              nome={t("tecnologias.mostrarMais")}
              button={true}
              type="button"
              onClick={handleShowMore}
              size="small"
            />
          </div>
        )}
      </div>
    </section>
  );
}
