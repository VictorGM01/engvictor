import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Partners.module.scss';
import Link from '../../components/common/Link/Link';
import "swiper/swiper-bundle.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Partners() {
  return (
    <section className={styles.partners} id="partners">
      <Link nome='Parceiros' />
      <div className={styles.partners__container}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          className={styles.swiper}
          pagination={{
            clickable: true,
            bulletClass: "pagination",
            bulletActiveClass: "pagination-active",
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            },
          }}
        >
          <SwiperSlide className={styles.partners__slide} title='V2 Consulting'>
            <a href="https://v2consulting.com.br/" target="_blank" rel="noreferrer">
              <img src="/v2-exp.png" alt="Logo da empresa parceira V2 Consulting" />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.partners__slide} title='Sanus'>
            <a href="https://www.sanus.tech/" target="_blank" rel="noreferrer">
              <img src="/sanus.png" alt="Logo da empresa parceira Sanus" />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.partners__slide} title='Grupo Lello'>
            <a href="https://www.lello.com.br/" target="_blank" rel="noreferrer">
              <img src="/lello.png" alt="Logo da empresa parceira Grupo Lello" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
