import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app02',
  imports: [],
  templateUrl: './app02.html',
  styleUrl: './app02.css',
})
export class App02 implements OnChanges {
  @Input() fromFather: string = '';
  @Input() array: number[] = [];

  previousValue: string | undefined;
  currentValue: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling from the ngOnChanges hook ...');
    if (changes['fromFather']) {
      this.previousValue = changes['fromFather'].previousValue;
      this.currentValue = changes['fromFather'].currentValue;
      console.log(changes);
    }

    if (changes['array']) {
      this.previousValue = changes['array'].previousValue;
      this.currentValue = changes['array'].currentValue;
      console.log(changes);
    }
  }
}
