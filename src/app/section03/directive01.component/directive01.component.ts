import { Component } from '@angular/core';

@Component({
  selector: 'app-directive01',
  imports: [],
  templateUrl: './directive01.component.html',
  styleUrl: './directive01.component.css',
})
export class Directive01Component {
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
