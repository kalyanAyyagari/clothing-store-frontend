import { Injectable, signal } from '@angular/core';
import { Product } from '../../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  cartItems = signal<Product[]>([]);
  constructor() { }
}
