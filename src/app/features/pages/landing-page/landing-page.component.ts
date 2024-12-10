import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from "../../../shared/product-card/product-card.component";
import { StorageService } from '../../../core/services/storage.service';
import { HelperConstants } from '../../../shared/helperConstants';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ProductCardComponent],
  providers: [HelperConstants],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  constructor() {}

  signals = signal<string>('Hello World');
  StorageService = inject(StorageService);
  products = signal<any[]>([]);
  count = 0;
  addItemToCart(){
    const val = this.products()[this.count];
    if(val)
    this.StorageService.cartItems.update(items => [...items,val]);
    // this.StorageService.cartItems.update(items => [...items, {
    //   id: 1, name: 'Product 1', price: 10,
    //   category: '',
    //   subcategory: '',
    //   size: '',
    //   quantity: 0
    // }]);
  }

  ngOnInit(){
    this.products.set(HelperConstants.products);
  }

  // removeItemFromCart(){
  //   this.StorageService.cartItems.update(items => items.filter(item => item.id !== 1));
  // }
}
