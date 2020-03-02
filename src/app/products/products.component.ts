import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public post_id: number;
  public posts: any[] = [];
  public ratings: any[][] = [];
  public vf: any[] = [];


  constructor(private prodService: ProductsService) { }

  getProductsList() {
    this.prodService.getProducts().subscribe(p => {
      //this.posts.push(p);
      this.posts = this.posts.concat(p);

      //this.cwe.push(this.posts.rating);
      for(var ght:number=0; ght < 5; ght++){
        //console.log(this.posts[ght].rating);
        this.ratings[ght] = [];
        for(var ere:number=0; ere < this.posts[ght].rating; ere++){
          this.ratings[ght][ere].push(ere);
          //console.log(ere);
        }
      }
      console.log(this.ratings);
    });
  }




  ngOnInit() {
    this.getProductsList();
  }

}
