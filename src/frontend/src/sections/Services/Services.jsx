import styles from "./Services.module.scss";
import Link from "../../components/common/Link/Link";
import services from "../../data/services/services.json";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className={styles.services} id="services">
      <Link nome={t("servicos.titulo")} />
      <div className={styles.services__items}>
        {services.map((service, index) => (
          <div key={index} className={styles.services__item}>
            <div>
              {/* Use as chaves de tradução para o título e a descrição do serviço */}
              <h3>
                {t(
                  `servicos.titulos.${service.servico
                    .replace(/\s/g, "")
                    .toLowerCase()}`
                )}
              </h3>
              <p>
                {t(
                  `servicos.descricoes.${service.servico
                    .replace(/\s/g, "")
                    .toLowerCase()}`
                )}
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
