import { GetServerSideProps } from 'next';
import { IProductItems as Props } from '@mercado-livre/shared-types';

import api from '../../services/api';

import { Items } from '../../containers';

export default function PageItems(props: Props){
  return <Items {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  try {
    const { data } = await api.get(`/items${context.query && '/?q=' + context.query.search}`);

    return {
      props: data,
    }
  } catch (error) {
    return {
      props: {
        items:[]
      }
    }
  }
}
