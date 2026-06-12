import { Component, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Contato, tipoContato } from '../../models/contato.model';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class adicionarContato {
  #fb = inject(FormBuilder)
  formContato: FormGroup
  contatos: Contato[] = []
  tipos = Object.values(tipoContato)

  constructor(){
    this.formContato = this.#fb.group({
      nome: ['', [Validators.required,
        Validators.minLength(0),
        Validators.maxLength(100)        
      ]],
      telefone: ['', [Validators.required,
              Validators.minLength(0),
              Validators.maxLength(11)        
      ]],
      email: ['', [Validators.required,
              Validators.minLength(0),
              Validators.maxLength(100)        
      ]],
      aniversario: ['', [Validators.required,]],
      tipo: ['', Validators.required]
    })

    const contatosSalvos = localStorage.getItem('contatos');

    if(contatosSalvos){
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


  adicionarContato(): void{
    if(this.formContato.invalid){
      return
    }
    const dados = this.formContato.value
    const novoContato = new Contato(
      dados.nome,
      dados.telefone,
      dados.email,
      dados.aniversario,
      dados.tipo
    )
    this.contatos.push(novoContato)

    localStorage.setItem(
    'contatos',
    JSON.stringify(this.contatos)
    );

    this.formContato.reset()
  }
  

}
