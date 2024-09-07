import styles from './Services.module.scss';
import Link from '../../components/common/Link/Link';
import services from '../../data/services/services.json';


export default function Services() {
  return (
    <section className={styles.services} id="services">
      <Link nome='Serviços' />
      <div className={styles.services__items}>
        {services.map((service, index) => (
          <div key={index} className={styles.services__item}>
            <div>
              <h3>{service.servico}</h3>
              <p>{service.descricao}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}