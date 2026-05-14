import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';

interface empInterface {
  id: number;
  nome: string;
  role: string;
}

@Component({
  selector: 'app-directive02',
  imports: [CommonModule],
  templateUrl: './directive02.html',
  styleUrl: './directive02.css',
})
export class Directive02 {
  users = signal<empInterface[]>([
    { id: 1, nome: 'Mario', role: 'Developer' },
    { id: 2, nome: 'Luigi', role: 'Tester' },
    { id: 3, nome: 'Peach', role: 'Designer' },
    { id: 4, nome: 'gigi', role: 'Engineer' },
    { id: 5, nome: 'Elisa', role: 'Deploy' },
  ]);
}
