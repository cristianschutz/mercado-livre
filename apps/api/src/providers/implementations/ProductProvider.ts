import { IProductProvider } from "../IProductProvider";
import axios from 'axios';

export class ProductProvider implements IProductProvider {
  private transporter;

  constructor() {
    this.transporter = axios.create({
      baseURL: 'https://api.mercadolibre.com'
    });
  }

  async getItems() {
    const { data }  = await this.transporter.get('/sites/MLA/search?q=:query');
    const { available_filters } = data;
    const categories = available_filters[0].values.map(item => item.name);

    const items = data.results.map( item => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 2
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      };
    });

    return {
      author: {
        name: 'Cristian',
        lastname: 'Schutz',
      },
      categories,
      items: items.slice(0,4)
    };
  }

  async getItem(idItem: string) {
    const { data } = await this.transporter.get(`/items/${idItem}`);
    const {data: description } = await this.transporter.get(`/items/${idItem}/description`);
    const { id,seller_id,title,price,currency_id,pictures,condition,free_shipping,sold_quantity } = data;
    const {data: user}  = await this.transporter.get(`/users/${seller_id}`);
    const [name, lastname] = user.nickname.split(' ') || ['', ''];

    console.log(description);

    return {
      author: {
        name,
        lastname
      },
      item: {
        id,
        title,
        price:{
          currency: currency_id,
          amount: price,
          decimals: 2,
        },
        picture: pictures[0].url,
        condition,
        free_shipping,
        sold_quantity,
        description: description.plain_text
      },
    };
  }

  async searchItems(q: string) {
    const { data }  = await this.transporter.get(`/sites/MLA/search?q=${q}`);
    const { available_filters } = data;
    const categories = available_filters[0].values.map(item => item.name);

    const items = data.results.map(item => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 2
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      };
    });

    return {
      author: {
        name: 'Cristian',
        lastname: 'Schutz',
      },
      categories,
      items: items.slice(0,4)
    };
  }
}
