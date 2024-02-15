import styles from './CardProject.module.scss';

export default function CardProject({ project }) {
  const createMarkup = (html) => {
    return { __html: html };
  };
  
  return (
    <a className={styles.card} href={project.link} target="_blank" rel="noreferrer">
      <div className={styles.card__image}>
        <img src={project.imagem} alt={project.nome} />
      </div>
      <h3>{project.nome}</h3>
      
      <p dangerouslySetInnerHTML={createMarkup(project.descricao)}></p>
      
      <div className={styles.card__infos}>
        <div>
        <img src='/calendario.svg' alt='Data' />
          <span>{project.data}</span>
        </div>
        <div>
        <img src='/commit.svg' alt='Quantidade de commits' />
          <span>{project.commits} commits</span>
        </div>
      </div>
    </a>
  );
}