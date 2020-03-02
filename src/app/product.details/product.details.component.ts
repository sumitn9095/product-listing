import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product.details',
  templateUrl: './product.details.component.html',
  styleUrls: ['./product.details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public selectedProduct: any[] = [];
  public selectedProduct_title: string;
  public selectedProduct_id: number;
  public productId;

  public id: number;
  public image: string;
  public price: number;
  public rating: string;
  public name: string;
  public code: string;
  public available: string;



  constructor(private prodService : ProductsService,  private AR : ActivatedRoute ) { }

  // getMultipleProducts(...ids) {
  //   this.AR.params.subscribe(item => {
  //     console.log(item);
  //   });
  // }

  ngOnInit() {
    this.AR.params.subscribe(item => {
      let id = item['id'];
      this.prodService.getProduct(id).subscribe(c => {
        this.id = c.productId;
        this.name = c.product;
        this.code = c.code;
        this.available = c.available;
        this.price = c.price;
        this.rating = c.rating;
        this.image = c.productImage;
      });
    });
  }
}
