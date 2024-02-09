import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Partners.module.scss';
import Link from '../../components/common/Link/Link';
import "swiper/swiper-bundle.css";
import 'swiper/css/navigation'
import 'swiper/css/navigation'

export default function Partners() {
  return (
    <section className={styles.partners} id="partners">
      <Link nome='Parceiros' />
      <div className={styles.partners__container}>
        <Swiper
          modules={[Navigation, Pagination]}
          className={styles.swiper}
          // edita cor da paginação
          pagination={{
            clickable: true,
            bulletClass: "pagination",
            bulletActiveClass: "pagination-active",
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          >
          <SwiperSlide>
            <div>
              <img src="/v2-exp.png" alt="Logo do parceiro V2 Consulting" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/v2-exp.png" alt="Logo do parceiro V2 Consulting" />
          </SwiperSlide>
        </Swiper>
      </div>

    </section>
  );
}