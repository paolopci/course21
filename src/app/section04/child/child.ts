import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements AfterContentInit, AfterContentChecked {
  ngAfterContentInit(): void {
    console.log('---- Child: AfterContentInit ----');
    console.log('Child: AfterContentInit - contenuto proiettato inizializzato');
  }

  ngAfterContentChecked(): void {
    console.log('**** Child: AfterContentChecked ****');
    console.log('Child: AfterContentChecked - contenuto proiettato controllato');
  }
}
