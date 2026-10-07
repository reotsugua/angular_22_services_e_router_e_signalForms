import { Component, inject, input, output, signal } from '@angular/core';
import { Product, products } from '../../product';
import { ProductCard } from '../product-card/product-card';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // products = input.required<Product[]>();
  private productData = inject(ProductDataService);
  
  products = this.productData.getProducts();
  addToCart = output<Product>()
}
