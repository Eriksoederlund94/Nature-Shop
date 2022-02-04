import { nanoid } from 'nanoid';
import { ProductItems } from '../interfaces/productsData.interface';
import apple from '../../public/assets/apple.png';
import banana from '../../public/assets/banana.png';
import dragon from '../../public/assets/dragon.png';
import egg from '../../public/assets/egg.png';
import ginger from '../../public/assets/ginger.png';
import kiwi from '../../public/assets/kiwi.png';
import melon from '../../public/assets/melon.png';
import pepper from '../../public/assets/red-pepper.png';

export const productData: ProductItems[] = [
  {
    id: nanoid(),
    imageUrl: apple,
    produceName: 'apples',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
  {
    id: nanoid(),
    imageUrl: banana,
    produceName: 'bananas',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
  {
    id: nanoid(),
    imageUrl: dragon,
    produceName: 'dragon fruit',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
  {
    id: nanoid(),
    imageUrl: egg,
    produceName: 'eggs',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
  {
    id: nanoid(),
    imageUrl: ginger,
    produceName: 'ginger',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
  {
    id: nanoid(),
    imageUrl: kiwi,
    produceName: 'kiwi',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
  {
    id: nanoid(),
    imageUrl: melon,
    produceName: 'melon',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
  {
    id: nanoid(),
    imageUrl: pepper,
    produceName: 'red pepper',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
];
