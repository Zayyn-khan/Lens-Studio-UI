import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CheckoutService {

  private cartUrl = 'http://localhost:4000/cart';
  private checkoutUrl = 'http://localhost:4000/orders/checkout';

  constructor(private http: HttpClient) {}

  getCart(): Observable<any[]> {
    return this.http.get<any[]>(this.cartUrl);
  }

  checkout(): Observable<any> {
    return this.http.post(this.checkoutUrl, {});
  }
}
