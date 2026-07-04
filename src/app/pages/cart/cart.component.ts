import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe(data => {
      this.cartItems = data;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.total = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
  }

  updateQty(item: any, qty: number) {
    if (qty < 1) return;

    this.cartService.updateQty(item.id, qty).subscribe(() => {
      item.quantity = qty;
      this.calculateTotal();
    });
  }

  remove(id: number) {
    this.cartService.removeItem(id).subscribe(() => {
      this.loadCart();
    });
  }
}
