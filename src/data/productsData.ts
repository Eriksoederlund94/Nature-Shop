import { nanoid } from 'nanoid';
import { ProductItems } from '../interfaces/productsData.interface';
import apple from '../images/apple.png';
import banana from '../images/banana.png';
import orange from '../images/orange.png';
import cucumber from '../images/cucumber.png';
import ginger from '../images/ginger.png';
import kiwi from '../images/kiwi.png';
import melon from '../images/melon.png';
import pepper from '../images/pepper.png';

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
    imageUrl: orange,
    produceName: 'orange',
    weight: '2kg',
    price: 100,
    inStock: 20,
  },
  {
    id: nanoid(),
    imageUrl: cucumber,
    produceName: 'cucumber',
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
