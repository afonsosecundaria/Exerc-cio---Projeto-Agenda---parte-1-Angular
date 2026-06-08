import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Contato } from '../../models/contato.model';



@Component({
  selector: 'app-contato',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class adicionarContato {
  #fb = inject(FormBuilder)
  formContato: FormGroup
  contatos: Contato[]
  constructor(){
    this.formContato = this.#fb.group({
      nome: [undefined, [Validators.required,
        Validators.min(0),
        Validators.max(100)        
      ]],
      telefone: [undefined, [Validators.required,
              Validators.min(0),
              Validators.max(100)        
      ]],
      bim3: [undefined, [Validators.required,
              Validators.min(0),
              Validators.max(100)        
      ]],
      bim4: [undefined, [Validators.required,
              Validators.min(0),
              Validators.max(100)        
      ]],
    })
  }
  

}
