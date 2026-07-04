import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = false;
  shopOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleShop(event: Event) {
    event.preventDefault();
    this.shopOpen = !this.shopOpen;
  }
}
