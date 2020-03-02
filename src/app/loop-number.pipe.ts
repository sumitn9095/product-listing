import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loopNumber'
})
export class LoopNumberPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let wwq = [];
    // for (let key in value) {
    //   wwq.push(value[key]);
      
    //   return key;
    // }

    for(let e = 0; e < value; e++){
      console.log("---key----");
      console.log(e+ " --- "+ value);
      wwq.push(value);
      return wwq;
    }
    //return wwq;
  }
}
