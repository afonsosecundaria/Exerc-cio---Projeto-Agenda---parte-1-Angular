import { Component, inject } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { Contato } from '../../models/contato.model';


@Component({
  selector: 'app-exibe-contatos',
  imports: [],
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.css',
})
export class ExibeContatos {
  #agenda = inject(AgendaService);

  get contatos(): Contato[] {
    return this.#agenda.obterTodos();
  }

  removerContato(contato: Contato): void {
    this.#agenda.remover(contato);
  }
}
