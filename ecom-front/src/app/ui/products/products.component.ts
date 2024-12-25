import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : any;

  constructor(private http : HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8087/api/products").subscribe({
      next : data => {
        this.products = data;
      },
      error : err => {
        console.log(err);
      }
    })
  }

}
