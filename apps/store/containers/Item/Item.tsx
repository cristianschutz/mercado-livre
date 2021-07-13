import styles from './Item.module.scss';
import { Breadcrumbs } from '../../components';
import { IProductItem as Props } from '@mercado-livre/shared-types';
import {currencySymbol, formatPrice} from '../../helpers';
import { toast } from 'react-toastify';
import Head from 'next/head';


export function Item(props: Props){
  const {author, item: {id, title, description, price, picture, condition, sold_quantity}} = props;

  const breadcrumbsItems= [
    {
      link:'/',
      text:'Página Inicial'
    },
    {
      text: title
    }
  ];

  return <article>
    <Head>
      <title>{title} - Mercado Livre</title>
    </Head>
    <Breadcrumbs items={breadcrumbsItems} />
    <div className={`${styles.bgWhite} container`}>
      <div className={`${styles.content}`}>
        <figure>
          <img src={picture} alt="Imagem do Produto" />
        </figure>

        <div>
          <small>
            {condition} - {sold_quantity} vendidos
          </small>

          <h1>{title}</h1>

          <h2>{`${currencySymbol(price.currency)} ${formatPrice(price.amount,price.decimals)}`}</h2>

          <button onClick={()=> toast.dark("Somente demonstração!")}>Comprar</button>
        </div>
      </div>

      <div className={styles.description}>
        <h3>Descrição do produto</h3>
        <p>{description}</p>
      </div>
    </div>
  </article>
}
