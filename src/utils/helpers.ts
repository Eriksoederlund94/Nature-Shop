import { ProductItem } from '../interfaces/productsData.interface';

export const getLocalCart = () => {
  if (localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart')!);
  }
  return [];
};

export function loadProducts(data: ProductItem[]) {
  if (localStorage.getItem('products')) {
    return JSON.parse(localStorage.getItem('products')!);
  }
  return data;
}

export function loadLoggedInUser() {
  if (localStorage.getItem('isLoggedIn')) {
    return JSON.parse(localStorage.getItem('isLoggedIn')!);
  }
  return false;
}

export function loadLoggedInUsername() {
  if (localStorage.getItem('loggedInUser')) {
    return JSON.parse(localStorage.getItem('loggedInUser')!);
  }
  return '';
}

export function numbersOnly(value: number) {
  if (typeof value === 'number') {
    return value;
  }
}
