import { Component, inject } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  StorageService = inject(StorageService);

}
