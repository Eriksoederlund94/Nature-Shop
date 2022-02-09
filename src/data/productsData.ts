import { nanoid } from 'nanoid';
import { ProductItem } from '../interfaces/productsData.interface';
import apple from '../images/apple.png';
import banana from '../images/banana.png';
import orange from '../images/orange.png';
import cucumber from '../images/cucumber.png';
import ginger from '../images/ginger.png';
import kiwi from '../images/kiwi.png';
import melon from '../images/melon.png';
import pepper from '../images/pepper.png';

export const productData: ProductItem[] = [
  {
    id: '1',
    imageUrl: apple,
    produceName: 'apples',
    weight: '2kg',
    price: 100,
    inStock: 10,
  },
  {
    id: '2',
    imageUrl: banana,
    produceName: 'bananas',
    weight: '2kg',
    price: 100,
    inStock: 18,
  },
  {
    id: '3',
    imageUrl: orange,
    produceName: 'orange',
    weight: '2kg',
    price: 100,
    inStock: 40,
  },
  {
    id: '4',
    imageUrl: cucumber,
    produceName: 'cucumber',
    weight: '2kg',
    price: 100,
    inStock: 80,
  },
  {
    id: '5',
    imageUrl: ginger,
    produceName: 'ginger',
    weight: '2kg',
    price: 100,
    inStock: 17,
  },
  {
    id: '6',
    imageUrl: kiwi,
    produceName: 'kiwi',
    weight: '2kg',
    price: 100,
    inStock: 44,
  },
  {
    id: '7',
    imageUrl: melon,
    produceName: 'melon',
    weight: '2kg',
    price: 100,
    inStock: 64,
  },
  {
    id: '8',
    imageUrl: pepper,
    produceName: 'red pepper',
    weight: '2kg',
    price: 100,
    inStock: 36,
  },
];
