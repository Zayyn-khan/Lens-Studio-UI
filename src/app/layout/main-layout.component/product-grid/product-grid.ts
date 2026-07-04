import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.html',
  imports: [CommonModule],
  styleUrls: ['./product-grid.css'],
})
export class ProductGridComponent implements OnInit {
  products = [
    { id: 1, name: 'Black Sunglasses', price: 2500, image: '...' }
  ];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:4000/products').subscribe((data) => {
      this.products = data;
    });
  }

  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
}
