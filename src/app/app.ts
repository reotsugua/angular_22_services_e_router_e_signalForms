import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { Footer } from './components/footer/footer';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Banner, Footer, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
