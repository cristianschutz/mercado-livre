import { GetServerSideProps } from 'next';
import { Home } from "../containers";
import { IProductItems as Props } from '@mercado-livre/shared-types';

import api from '../services/api';

export default function Index(props: Props) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  try {
    const { data } = await api.get(`/items`);

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
