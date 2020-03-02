import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public samSer : any[];
  constructor(private ss: SampleService) { }
  ngOnInit() {
      this.samSer = this.ss.showList();
  }

  ngAfterViewInit(){
    this.samSer = this.ss.showList();
    console.log("112");
  }
}