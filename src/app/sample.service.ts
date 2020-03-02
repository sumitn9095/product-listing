import { Injectable } from '@angular/core';
import { Iuser } from './shared/model/user.form.structure';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  public mylist : any[] = [
    {
      name: 'ssss',
      age: 23,
      phone: 4564564545
    },
    {
      name: 'ssss12',
      age: 25,
      phone: 4564564545
    }
  ];

  showList(){

    return this.mylist;
  }


  addList(name: string, age: number, phone: number){
    let obj: Iuser = {name,age,phone}
    this.mylist.push(obj);
  }

}
