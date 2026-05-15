import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app13',
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './app13.html',
  styleUrl: './app13.css',
})
export class App13 {
  hasText: boolean = false;
  isItalic: boolean = false;

  textInput(e: any) {
    this.hasText = e.target.value !== '';
    this.isItalic = e.target.value !== '';
  }
}
