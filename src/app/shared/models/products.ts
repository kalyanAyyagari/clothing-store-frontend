export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  size: string;
  quantity: number;
  images?: string[];
  description?: string;
}
