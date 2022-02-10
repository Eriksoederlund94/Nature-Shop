import { ProductItem } from '../interfaces/productsData.interface';
import apple from '../images/apple.png';
import banana from '../images/banana.png';
import orange from '../images/orange.png';
import cucumber from '../images/cucumber.png';
import ginger from '../images/ginger.png';
import kiwi from '../images/kiwi.png';
import melon from '../images/melon.png';
import pepper from '../images/pepper.png';
import cherry from '../images/cherry.png';

export const productData: ProductItem[] = [
  {
    id: '1',
    imageUrl: apple,
    produceName: 'apples',
    weight: '1kg',
    price: 5.46,
    inStock: 10,
  },
  {
    id: '2',
    imageUrl: banana,
    produceName: 'bananas',
    weight: '1kg',
    price: 3.27,
    inStock: 18,
  },
  {
    id: '3',
    imageUrl: orange,
    produceName: 'oranges',
    weight: '1kg',
    price: 2.78,
    inStock: 40,
  },
  {
    id: '4',
    imageUrl: cucumber,
    produceName: 'cucumbers',
    weight: '1kg',
    price: 6.45,
    inStock: 80,
  },
  {
    id: '5',
    imageUrl: ginger,
    produceName: 'ginger',
    weight: '1kg',
    price: 8.41,
    inStock: 17,
  },
  {
    id: '6',
    imageUrl: kiwi,
    produceName: 'kiwi',
    weight: '2kg',
    price: 9.53,
    inStock: 44,
  },
  {
    id: '7',
    imageUrl: melon,
    produceName: 'melon',
    weight: '2kg',
    price: 5.24,
    inStock: 64,
  },
  {
    id: '8',
    imageUrl: pepper,
    produceName: 'red pepper',
    weight: '2kg',
    price: 12.02,
    inStock: 36,
  },
  {
    id: '9',
    imageUrl: cherry,
    produceName: 'cherry',
    weight: '2kg',
    price: 8.7,
    inStock: 25,
  },
];
