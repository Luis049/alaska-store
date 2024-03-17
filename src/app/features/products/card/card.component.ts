import { Component, Input } from '@angular/core';
import { Product } from 'app/shared/models/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product;
}
