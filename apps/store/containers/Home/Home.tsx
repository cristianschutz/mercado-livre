import styles from './Home.module.scss';
import { Breadcrumbs, EmptyResults } from '../../components';
import { IProductItems as Props } from '@mercado-livre/shared-types';

import { ListItem } from '../../components';

export function Home({items}: Props){
  const breadcrumbsItems= [
    {
      link:'/',
      text:'Página Inicial'
    },
    {
      text:'Destaques'
    }
  ];
  return <div className={styles.container}>
    <Breadcrumbs items={breadcrumbsItems} />
    <div className="container">
      { items.length ? items.map(item => <ListItem key={item.id} {...item} />) : <EmptyResults /> }
    </div>
  </div>
}
