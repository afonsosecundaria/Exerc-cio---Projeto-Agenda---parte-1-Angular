import { Component, signal } from '@angular/core';
import { adicionarContato } from './components/contato/contato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, adicionarContato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Agenda');
}
