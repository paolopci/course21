import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface empInterface {
  id: number;
  nome: string;
  role: string;
  age: number;
}

@Component({
  selector: 'app-directive02',
  imports: [CommonModule],
  templateUrl: './directive02.html',
  styleUrl: './directive02.css',
})
export class Directive02 {
  //age: number = 210;

  users = signal<empInterface[]>([
    { id: 1, nome: 'Mario', role: 'Developer', age: 10 },
    { id: 2, nome: 'Luigi', role: 'Tester', age: 20 },
    { id: 3, nome: 'Peach', role: 'Designer', age: 30 },
    { id: 4, nome: 'gigi', role: 'Engineer', age: 40 },
    { id: 5, nome: 'Elisa', role: 'Deploy', age: 10 },
  ]);
}
