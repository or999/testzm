import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   // TODO:a^3+b^3=c^3      a,b,c 为1-100正整数正整数，输出所有可能的a,b,c
   demoLearning() {
    // let array=[]
    // for (let a = 1; a < 100; a++){
    //   for (let b = a + 1; b < 100; b++) {
    //     for (let c = b + 1; c < 100; c++) {
    //       if (a^3 + b^3 == c^3) {       
            
    //          array.push([a,b,c])
    //       }
    //     }
        
    //   }
    // }
    // console.log(array);
    // return array
  }
}
