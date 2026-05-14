import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  display: boolean = true;
  displayText: boolean = false;
  test: boolean = true;
  visibile: boolean = false;
  user: string = 'Paolo Paci';
  protected readonly title = signal('myAngular21');

  employees = signal<any[]>([
    { id: 1, name: 'paolo paci', role: 'Admin' },
    { id: 2, name: 'celeste paci', role: 'Admin' },
    { id: 3, name: 'vittorio paci', role: 'user' },
    { id: 4, name: 'guido paci', role: 'user' },
    { id: 5, name: 'aurelio paci', role: 'user' },
  ]);

  show(): void {
    this.displayText = !this.displayText;
    this.visibile = !this.visibile;
  }
}
