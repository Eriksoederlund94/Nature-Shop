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
    id: '0d924ac5-8888-4917-839f-66425278bcb3',
    imageUrl: apple,
    produceName: 'apples',
    weight: '1kg',
    price: 5.46,
    inStock: 10,
  },
  {
    id: '5957bc63-1bef-4aaf-8997-808be8100b4d',
    imageUrl: banana,
    produceName: 'bananas',
    weight: '1kg',
    price: 3.27,
    inStock: 18,
  },
  {
    id: '522a57bd-bbed-46d8-abc2-993bd3699ed5',
    imageUrl: orange,
    produceName: 'oranges',
    weight: '1kg',
    price: 2.78,
    inStock: 40,
  },
  {
    id: '13f4524f-c726-40bf-b145-f652587487c0',
    imageUrl: cucumber,
    produceName: 'cucumbers',
    weight: '1kg',
    price: 6.45,
    inStock: 80,
  },
  {
    id: '05e7400d-654e-49aa-9e91-f3f4994059f1',
    imageUrl: ginger,
    produceName: 'ginger',
    weight: '1kg',
    price: 8.41,
    inStock: 17,
  },
  {
    id: 'bd189f0b-6fb8-40f3-beae-d1c0219a08cc',
    imageUrl: kiwi,
    produceName: 'kiwi',
    weight: '1kg',
    price: 9.53,
    inStock: 44,
  },
  {
    id: '1fae360f-980f-4f30-8ead-73d3b7365d49',
    imageUrl: melon,
    produceName: 'melon',
    weight: '1kg',
    price: 5.24,
    inStock: 64,
  },
  {
    id: '5f0c51ef-890d-4742-832f-ce75c8882db1',
    imageUrl: pepper,
    produceName: 'red pepper',
    weight: '1kg',
    price: 12.02,
    inStock: 36,
  },
  {
    id: 'fd97e6a2-af73-4921-a3d6-621fcc3a82bf',
    imageUrl: cherry,
    produceName: 'cherry',
    weight: '1kg',
    price: 8.99,
    inStock: 25,
  },
];
