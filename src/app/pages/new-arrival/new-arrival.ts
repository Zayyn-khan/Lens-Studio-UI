import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-arrival.html',
  styleUrl: './new-arrival.css',
})
export class NewArrival {
  products = [
    {
      name: 'Aviator Gold',
      price: 120,
      image: 'https://images.unsplash.com/photo-1625591340248-6d289000f96a?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
}
