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
          <SwiperSlide>
            <img src="/v2-exp.png" alt="Logo do parceiro V2 Consulting" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/v2-exp.png" alt="Logo do parceiro V2 Consulting" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/v2-exp.png" alt="Logo do parceiro V2 Consulting" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/v2-exp.png" alt="Logo do parceiro V2 Consulting" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
