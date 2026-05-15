import { Component, OnInit } from '@angular/core';
import { App02 } from '../app02/app02';

@Component({
  selector: 'app-app01',
  imports: [App02],
  templateUrl: './app01.html',
  styleUrl: './app01.css',
})
export class App01 {
  myValue = 'Valore setting from App01';
  // constructor() {
  //   console.log("ho creato l'istanza della classe App01");
  //   console.log(this.myValue);
  // }
  // ngOnInit(): void {
  //   console.log("NgOnInit: log dall'hook ngonInit");
  // }
}
