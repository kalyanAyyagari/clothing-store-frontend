import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPageComponent {
  storageService = inject(StorageService);
  cartItems = this.storageService.cartItems;
}

