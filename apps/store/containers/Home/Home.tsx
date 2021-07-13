import styles from './Home.module.scss';
import { Breadcrumbs } from '../../components';
import { IProductItems as Props } from '@mercado-livre/shared-types';

import { ListItem } from '../../components';

export function Home({items}: Props){
  const breadcrumbsItems= [
    {
      link:'/',
      text:'Página Inicial'
    }
  ];
  return <>
    <Breadcrumbs items={breadcrumbsItems} />
    {/* <h3 className={`${styles.container} container`}>Bem vindo, você já pode começar a procurar por produtos!</h3> */}
    <div className="container">
      { items?.map(item => <ListItem key={item.id} {...item} />) }
    </div>
  </>
}
