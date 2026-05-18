import { Component, OnInit } from '@angular/core';
import { App02 } from '../app02/app02';

@Component({
  selector: 'app-app01',
  imports: [App02],
  templateUrl: './app01.html',
  styleUrl: './app01.css',
})
export class App01 implements OnInit {
  myValue = 'Valore iniziale ...';
  arrayValue = [1, 2, 3];

  // constructor() {
  //   console.log("ho creato l'istanza della classe App01");
  //   console.log(this.myValue);
  // }
  ngOnInit(): void {
    console.log('NgOnInit: ');
    console.log(this.myValue);
  }

  updateValue() {
    this.myValue = 'click button: Valore aggiornato ...';
  }

  updateValueArray() {
    this.arrayValue.push(4);
  }
}
