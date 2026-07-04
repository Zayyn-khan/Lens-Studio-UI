import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {

  private cartUrl = 'http://localhost:4000/cart';

  constructor(private http: HttpClient) {}

  getCart(): Observable<any[]> {
    return this.http.get<any[]>(this.cartUrl);
  }

  addToCart(product: any): Observable<any> {
    return this.http.post(this.cartUrl, product);
  }

  updateQty(id: number, quantity: number): Observable<any> {
    return this.http.patch(`${this.cartUrl}/${id}`, { quantity });
  }

  removeItem(id: number): Observable<any> {
    return this.http.delete(`${this.cartUrl}/${id}`);
  }
}
