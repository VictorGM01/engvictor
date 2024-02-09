import styles from './Services.module.scss';
import Link from '../../components/common/Link/Link';
import services from '../../data/services/services.json';


export default function Services() {
  return (
    <section className={styles.services} id="services">
      <Link nome='Serviços'/>
      {services.map((service, index) => (
        <div key={index} className={styles.services__item}>
          <h3>{service.servico}</h3>
          <p>{service.descricao}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}