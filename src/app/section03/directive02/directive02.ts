import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface empInterface {
  id: number;
  nome: string;
  role: string;
  age: number;
}

@Component({
  selector: 'app-directive02',
  imports: [CommonModule, FormsModule],
  templateUrl: './directive02.html',
  styleUrl: './directive02.css',
})
export class Directive02 {
  //age: number = 210;
  employeeRole: string = '';

  users = signal<empInterface[]>([
    { id: 1, nome: 'Mario', role: 'Developer', age: 10 },
    { id: 2, nome: 'Luigi', role: 'Tester', age: 20 },
    { id: 3, nome: 'Peach', role: 'Designer', age: 30 },
    { id: 4, nome: 'gigi', role: 'Engineer', age: 40 },
    { id: 5, nome: 'Elisa', role: 'Deploy', age: 10 },
    { id: 6, nome: 'Carla', role: 'HR', age: 10 },
    { id: 7, nome: 'Franco', role: 'User', age: 50 },
    { id: 8, nome: 'Celeste', role: 'Father', age: 80 },
    { id: 9, nome: 'Venerina', role: 'Mom', age: 80 },
  ]);
}
