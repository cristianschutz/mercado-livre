import Head from 'next/head';
import styles from './Items.module.scss';
import { Breadcrumbs } from '../../components';
import { IProductItems as Props } from '@mercado-livre/shared-types';

import { ListItem, EmptyResults } from '../../components';

export function Items({items}: Props){
  const breadcrumbsItems= [
    {
      link:'/',
      text:'Página Inicial'
    },
    {
      text:'Busca'
    }
  ];

  return <div className={styles.container}>
    <Head>
      <title>Busca - Mercado Livre</title>
    </Head>
    <Breadcrumbs items={breadcrumbsItems} />
    <div className="container">
      { items.length ? items.map(item => <ListItem key={item.id} {...item} />) : <EmptyResults /> }
    </div>
  </div>
}
