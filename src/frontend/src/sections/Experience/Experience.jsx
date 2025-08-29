import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.scss";
import Link from "../../components/common/Link/Link";
import experiences from "../../data/experiences/experiences.json";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleInteraction = () => {
    setIsPaused(true);
    // Resume autoplay after 3 seconds of inactivity
    setTimeout(() => setIsPaused(false), 3000);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const currentExperience = experiences[currentIndex];

  return (
    <section className={styles.experience} id="experience">
      <Link nome={t("experiencia.titulo")} />
      <div className={styles.experience__container}>
        <div className={styles.carousel}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={styles.carousel__card}
          >
            <div className={styles.card__header}>
              <img
                src={currentExperience.logo}
                alt={currentExperience.empresa}
              />
              <div className={styles.card__info}>
                <h2>{currentExperience.empresa}</h2>
                <h3>
                  {t(
                    `experiencia.cargos.${currentExperience.cargo.replace(
                      /\s/g,
                      ""
                    )}`
                  )}
                </h3>
                <span className={styles.card__period}>
                  {currentExperience.dataInicio} - {currentExperience.dataFim}
                </span>
              </div>
            </div>

            <div className={styles.card__content}>
              <p className={styles.card__description}>
                {t(
                  `experiencia.descricoes.${currentExperience.empresa
                    .replace(/\s/g, "")
                    .toLowerCase()}${
                    currentExperience.id === 1
                      ? "1"
                      : currentExperience.id === 5
                      ? "2"
                      : ""
                  }`
                )}
              </p>

              <div className={styles.card__technologies}>
                <p>{t("experiencia.tecnologiasUtilizadas")}</p>
                <div className={styles.technologies__grid}>
                  {currentExperience.tecnologias.map((tecnologia) => (
                    <motion.img
                      key={tecnologia}
                      src={`/${tecnologia}.svg`}
                      alt={tecnologia}
                      title={tecnologia}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className={styles.carousel__controls}>
            <motion.button
              onClick={() => {
                prevSlide();
                handleInteraction();
              }}
              className={styles.carousel__button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.button>

            <div className={styles.carousel__indicators}>
              {experiences.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    goToSlide(index);
                    handleInteraction();
                  }}
                  className={`${styles.indicator} ${
                    index === currentIndex ? styles.indicator__active : ""
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={() => {
                nextSlide();
                handleInteraction();
              }}
              className={styles.carousel__button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
