import styles from './EmptyResults.module.scss';

export function EmptyResults(){
  return <p className={`${styles.container}`}>
    Nenhum item encontrado! =(
  </p>
}
