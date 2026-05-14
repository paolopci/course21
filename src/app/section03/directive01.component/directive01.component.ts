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
    },
    {
      id: 2,
      nome: 'Celeste',
    },
    {
      id: 3,
      nome: 'Vittorio',
    },
  ];

  trackByItemId(item: any) {
    return item.id;
  }

  updateItem() {
    this.utenti[1] = { id: 2, nome: 'Venerina' };
  }
}
