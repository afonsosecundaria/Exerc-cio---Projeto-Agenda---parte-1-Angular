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
        Validators.min(0),
        Validators.max(100)        
      ]],
      telefone: ['', [Validators.required,
              Validators.min(0),
              Validators.max(100)        
      ]],
      email: ['', [Validators.required,
              Validators.min(0),
              Validators.max(100)        
      ]],
      aniversario: ['', [Validators.required,]],
      tipo: ['', Validators.required]
    })
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
    this.formContato.reset
  }
  

}
