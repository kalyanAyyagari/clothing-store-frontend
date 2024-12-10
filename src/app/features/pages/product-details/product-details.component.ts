import { Component, ChangeDetectionStrategy, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { Product } from '../../../shared/models/products';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    GalleriaModule,
    ButtonModule,
    DropdownModule,
    RatingModule,
    FormsModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  productId = this.route.snapshot.params['id'];
  productDetails = signal<Product | null>(null);

  ngOnInit() {
    this.apiService.getProductById(this.productId).subscribe({
      next: (product) => {
        console.log('product', product);
        this.productDetails.set(product);
      },
      error: (error) => {
        console.log('error', error);
      }
    })
  }
}
