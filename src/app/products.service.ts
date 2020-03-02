import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map,filter, debounceTime, find} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products_api = '../assets/productapi.json';
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.products_api).pipe(
      map((item:any[]) => {
        return item;
      })
    );
  }

  getProduct(id) {
    return this.http.get(this.products_api).pipe(
      map((item:any[]) => {
        return item.find(data => data.productId == id)
      })
    );



    // let observer = fromEvent(search, "keyup").pipe(map((e:any) => {
    //   return e.target.value
    //  }),
    //    filter(text => text.length >= 4),
    //  debounceTime(2)
    //  );
    //  observer.subscribe(item => {
    //    console.log(item);
    //  });

    // const result = clicks.pipe(find(ev => ev.target.tagName === 'DIV'));


  }

}
