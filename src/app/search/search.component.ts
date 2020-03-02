import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import {map, filter}  from 'rxjs/operators';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchTerm: string;

  constructor(private prodService : ProductsService ) {


  }

  ngOnInit() {
    // let srch = document.getElementById('search');
    // let obs = fromEvent(srch, 'keyup').pipe(
    //   map((e:any) => {
    //     return e.target.value;
    //   })
    // );

    // obs.subscribe(item => {
    //   this.searchTerm = item;
    // });

    // this.prodService.getProduct(this.searchTerm).subscribe(item => {
    //   console.log(item);
    // })
  }

}
