import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  productId!: number;
  product: any;

  rating = 4;
  quantity = 1;
  showMiniCart = false;
  wishlist = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Product ID:', this.productId);

    // ✅ PRODUCT API se load
    this.http
      .get<any>(`http://localhost:4000/products/${this.productId}`)
      .subscribe({
        next: (res) => {
          this.product = res;
          this.rating = res.rating || 4;
        },
        error: () => {
          alert('Product not found');
        }
      });
  }

  // ⭐ Rating
  setRating(star: number) {
    this.rating = star;
  }

  // ➕ Quantity
  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // ❤️ Wishlist
  toggleWishlist() {
    this.wishlist = !this.wishlist;
    alert(this.wishlist ? 'Added to wishlist ❤️' : 'Removed from wishlist');
  }

  // 🛒 ADD TO CART (SERVICE THROUGH)
  addToCart() {
  const item = {
    productId: this.product.id,
    name: this.product.name,
    price: this.product.price,
    image: this.product.image,
    quantity: this.quantity
  };

  this.cartService.addToCart(item).subscribe(() => {
    this.router.navigate(['/cart']); // ✅ redirect
  });
}

}
