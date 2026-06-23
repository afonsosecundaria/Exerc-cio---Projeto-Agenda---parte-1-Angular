import { Component, signal } from '@angular/core';
import { adicionarContato } from './components/contato/contato';
import { CommonModule } from '@angular/common';
import { Cabecalho } from "./components/cabecalho/cabecalho";
import { ExibeContatos } from "./components/exibe-contatos/exibe-contatos";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, adicionarContato, Cabecalho, ExibeContatos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Agenda');
}
