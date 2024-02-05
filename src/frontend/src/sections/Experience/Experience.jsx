import styles from './Experience.module.scss'
import Link from '../../components/common/Link/Link'
import v2 from '../../assets/images/v2.png'
import inai from '../../assets/images/inai.png'
import gazeta from '../../assets/images/gazeta.png'
import mobly from '../../assets/images/mobly.png'

export default function Experience() {
  return (
    <section className={styles.experience}>
      <Link nome="Experiências" />
      <div className={styles.experience__container}>
        <ul>
          <li>
            <div>
              <img src={v2} alt="V2 Consulting" />
              <p>
                V2 Consulting
              </p>
              <article>

              </article>
            </div>
          </li>
          <li>
            <div>
              <img src={inai} alt="Inai" />
              <p>
                InAi
              </p>
              <article>

              </article>
            </div>
          </li>
          <li>
            <div>
              <img src={mobly} alt="Mobly" />
              <p>
                Mobly
              </p>
              <article>

              </article>
            </div>
          </li>
          <li>
            <div>
              <img src={gazeta} alt="Gazeta" />
              <p>
                Rede Gazeta
              </p>
              <article>

              </article>
            </div>
          </li>
          <li>
            <div>
              <img src={v2} alt="V2 Consulting" />
              <p>
                V2 Consulting
              </p>
              <article>

              </article>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}