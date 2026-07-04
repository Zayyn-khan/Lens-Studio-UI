import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total = 0;
  loading = false;

  form = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.http
      .get<any[]>('http://localhost:4000/cart')
      .subscribe((items) => {
        this.cartItems = items;
        this.total = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      });
  }

  placeOrder() {
    if (!this.form.name || !this.form.phone || !this.form.address) {
      alert('Please fill all required fields');
      return;
    }

    this.loading = true;

    this.http
      .post('http://localhost:4000/orders/checkout', {
        customerName: this.form.name,
        customerEmail: this.form.email,
        customerPhone: this.form.phone,
        address: this.form.address,
      })
      .subscribe({
        next: () => {
          alert('Order placed successfully 🎉');
          this.router.navigate(['/']);
        },
        error: () => {
          alert('Something went wrong 😢');
          this.loading = false;
        },
      });
  }
}
