import { SlicePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'app/shared/models/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product!: Product;
  @Output() addToCardEvent = new EventEmitter<Product>();
  onAddToCart(): void {
    this.addToCardEvent.emit(this.product);
  }
}
