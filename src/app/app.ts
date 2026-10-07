import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { Footer } from './components/footer/footer';
import { ProductList } from './components/product-list/product-list';
import { Product } from './product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Banner, Footer, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cart = signal<Product[]>([]);
  carItemsCount = computed(()=> this.cart().length)

  logEffect = effect(()=>{
    console.log(this.cart());
  })

  modalCart(product:Product): void {
    this.cart.update(itens => [...itens, product]);
    alert(`${product.name} adiconado no carrinho!`);
  }
}
