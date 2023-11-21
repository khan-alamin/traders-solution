import { Product } from '../config/product.model';

export interface OrderItem {
  id?: number;
  product: Product;
  quantity: number;
  amount: number;
}
