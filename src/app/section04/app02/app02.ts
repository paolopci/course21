import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app02',
  imports: [],
  templateUrl: './app02.html',
  styleUrl: './app02.css',
})
export class App02 implements OnChanges {
  @Input() fromFather: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
