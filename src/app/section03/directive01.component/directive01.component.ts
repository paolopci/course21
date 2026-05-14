import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive01',
  imports: [CommonModule],
  templateUrl: './directive01.component.html',
  styleUrl: './directive01.component.css',
})
export class Directive01Component {
  trackByFn: any;

  utenti = [
    {
      id: 1,
      nome: 'Paolo',
      cognome: 'Paci',
      email: 'paolo.paci@gmail.com',
      ruolo: 'Admin',
    },
    {
      id: 1,
      nome: 'Celeste',
      cognome: 'Celeste',
      email: 'celeste.paci@gmail.com',
      ruolo: 'Admin',
    },
    {
      id: 1,
      nome: 'Vittorio',
      cognome: 'Vittorio',
      email: 'vittorio.paci@gmail.com',
      ruolo: 'Admin',
    },
  ];
}
