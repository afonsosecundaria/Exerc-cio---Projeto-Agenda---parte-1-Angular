import { Component, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Contato, tipoContato } from '../../models/contato.model';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})

export class adicionarContato {
  #fb = inject(FormBuilder)
  #agenda = inject(AgendaService)
  formContato: FormGroup
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
    );

    const adicionou = this.#agenda.adicionar(novoContato);

      if (adicionou) {
        this.formContato.reset();
      } else {
        alert('Contato já cadastrado!');
      }
    }
  
}