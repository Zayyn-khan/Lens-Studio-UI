import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from './../../layout/main-layout.component/hero-section/hero-section';
import { FeaturedSection } from './../../layout/main-layout.component/featured-section/featured-section';
import { ProductGridComponent } from './../../layout/main-layout.component/product-grid/product-grid';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FeaturedSection, ProductGridComponent, HeroSection,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading products', err);
        this.loading = false;
      }
    });
  }
}
