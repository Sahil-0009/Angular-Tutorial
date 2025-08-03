import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular-Tutorial';
  name = 'Sahil';
  // name = signal('Angular 20');
  // protected readonly title = signal('Angular-Tutorial');
}
 