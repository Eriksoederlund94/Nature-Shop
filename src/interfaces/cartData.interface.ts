import { ProductItem } from './productsData.interface';

export interface CartItem extends ProductItem {
  amount: number;
}
