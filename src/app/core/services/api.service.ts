import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/models/products';
import { HttpClient } from '@angular/common/http';
import { HelperConstants } from '../../shared/helperConstants';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/products';

  constructor() {}
  getProductById(id: number) {
    const product = HelperConstants.products.find((product: Product) => product.id == id);
    return of(product);
  }
}
