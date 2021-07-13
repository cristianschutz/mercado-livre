import { GetServerSideProps } from 'next';
import { IProductItem as Props } from '@mercado-livre/shared-types';
import api from '../../services/api';

import { Item } from '../../containers';

export default function PageItem(props: Props){
  return <Item {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const {id} = context.params;
  const {data} = await api.get(`/items/${id}`);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: data,
  }
}
