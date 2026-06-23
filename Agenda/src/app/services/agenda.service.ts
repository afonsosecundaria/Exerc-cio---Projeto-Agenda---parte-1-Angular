import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private contatos: Contato[] = [];

  constructor() {
    const contatosSalvos = localStorage.getItem('contatos');

    if (contatosSalvos) {
      const dados = JSON.parse(contatosSalvos);

      this.contatos = dados.map(
        (c: any) =>
          new Contato(
            c.nome,
            c.telefone,
            c.email,
            c.aniversario,
            c.tipo
          )
      );
    }
  }

  existe(c: Contato): boolean {
    return this.contatos.find(contato => contato.email === c.email) !== undefined;
  }

  adicionar(c: Contato): boolean {

    if (this.existe(c)) {
      return false;
    }

    this.contatos.push(c);

    localStorage.setItem(
      'contatos',
      JSON.stringify(this.contatos)
    );

    return true;
  }

  remover(c: Contato): boolean {

    const indice = this.contatos.indexOf(c);

    if (indice === -1) {
      return false;
    }

    this.contatos.splice(indice, 1);

    localStorage.setItem(
      'contatos',
      JSON.stringify(this.contatos)
    );

    return true;
  }

  obterTodos(): Contato[] {
    return this.contatos;
  }

}