import styles from './ListItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {useCallback} from 'react';
import { IProduct as Props } from '@mercado-livre/shared-types';
import {currencySymbol, formatPrice} from '../../helpers';

export function ListItem(props: Props){
  const {
    id,
    title,
    picture,
    price,
    free_shipping
  } = props;

  return <Link href={`/items/${id}`} passHref>
    <div className={styles.container}>
      <figure className={styles.itemFigure}>
        <img alt="Imagem do produto" src={picture} />
      </figure>

      <div className={styles.itemContent}>
        <h6>
          {`${currencySymbol(price.currency)} ${formatPrice(price.amount,price.decimals)}`}
          {free_shipping && <i title="Frete Grátis" className={styles.itemFreeShippingIcon} />}
        </h6>

        <h3>
          {title}
        </h3>
      </div>
    </div>
  </Link>
}
