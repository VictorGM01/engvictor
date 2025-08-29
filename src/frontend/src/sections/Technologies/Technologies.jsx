import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Technologies.module.scss";
import Link from "../../components/common/Link/Link";
import Button from "../../components/common/Button/Button";
import OrbitingCircles from "../../components/common/OrbitingCircles/OrbitingCircles";
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
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className={styles.technologies} id="technologies">
      <Link nome={t("tecnologias.titulo")} />
      
      <div className={styles.technologies__orbitingContainer}>
        {/* Órbita externa - Back-end */}
        <OrbitingCircles
          radius={isMobile ? 120 : 220}
          duration={isMobile ? 30 : 40}
          iconSize={isMobile ? 50 : 80}
          path={true}
        >
          {allTechnologies.filter(tech => (tech.area === "Back-end")).map((tech, index) => (
            <div key={index} className={styles.technologies__techIcon}>
              <img
                src={`/${tech.src}.svg`}
                alt={tech.nome}
                className={styles.technologies__techImage}
              />
            </div>
          ))}
        </OrbitingCircles>

        {/* Órbita interna - Front-end */}
        <OrbitingCircles
          radius={isMobile ? 70 : 140}
          duration={isMobile ? 20 : 25}
          iconSize={isMobile ? 30 : 50}
          reverse={true}
          path={true}
        >
          {allTechnologies.filter(tech => tech.area === "Front-end").map((tech, index) => (
            <div key={tech.nome} className={styles.technologies__techIcon}>
              <img
                src={`/${tech.src}.svg`}
                alt={tech.nome}
                className={styles.technologies__techImage}
              />
            </div>
          ))}
        </OrbitingCircles>

        {/* Órbita central - Banco de Dados */}
        <OrbitingCircles
          radius={isMobile ? 35 : 70}
          duration={isMobile ? 12 : 15}
          iconSize={isMobile ? 20 : 40}
          path={true}
        >
          {allTechnologies.filter(tech => (tech.area === "Banco de Dados")).map((tech, index) => (
            <div key={tech.index} className={styles.technologies__techIcon}>
              <img
                src={`/${tech.src}.svg`}
                alt={tech.nome}
                className={styles.technologies__techImage}
              />
            </div>
          ))}
        </OrbitingCircles>
      </div>

      <div className={styles.technologies__detailsButton}>
        <Button
          nome={showDetails ? t("tecnologias.ocultarDetalhes") : t("tecnologias.verDetalhes")}
          button={true}
          type="button"
          onClick={handleToggleDetails}
          size="small"
        />
      </div>

      {showDetails && (
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
      )}
    </section>
  );
}
