import styles from './Breadcrumbs.module.scss';
import Link from 'next/link';

interface Props {
  items: {
    link?: string;
    text: string;
    title?: string;
  }[]
}

let index = 0;

export function Breadcrumbs({items}: Props){
  return <nav className={`${styles.container} container`}>
    <ul>
      {
        items.map( item => (
          <li key={index++}>
            {item.link ? <Link href={item.link} passHref>{item.text}</Link> : item.text}
          </li>
          )
        )
      }
    </ul>
  </nav>
}
