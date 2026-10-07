import { Injectable, signal } from '@angular/core';
import { Product } from '../product';
import { CartItem } from '../cart';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  private cart = signal<CartItem<Product>[]>([]);

  
  public addToCart(product: Product) {
    const itemToUpdate = this.cart().findIndex(x => product.id === x.item.id);
    if (itemToUpdate < 0) {
      this.cart.update(cartItems => [...cartItems, {item: product, quantity: 1}]);
      return;
    }

      const updatedCart = [...this.cart()]
      updatedCart[itemToUpdate].quantity += 1;
      this.cart.set(updatedCart);
  }
}
