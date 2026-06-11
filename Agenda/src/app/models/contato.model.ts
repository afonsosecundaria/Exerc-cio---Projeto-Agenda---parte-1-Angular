export enum tipoContato {
    AMIGO = 'Amigo',
    IFRN = 'IFNR',
    TRABALHO = 'Trabalho',
    FAMILIA = 'Família',
    OUTRO = 'Outro'
}


export class Contato {
    private nome: string
    private telefone: string
    private email: string
    private aniversario: string
    private tipo: tipoContato
    constructor(
        nome: string,
        teleforne: string, 
        email: string, 
        aniversario: string, 
        tipo: tipoContato
    ){
      this.nome = nome
      this.telefone = teleforne
      this.email = email
      this.aniversario = aniversario
      this.tipo = tipo
    }
    getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getTelefone(): string {
    return this.telefone;
  }

  setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getAniversario(): string {
    return this.aniversario;
  }

  setAniversario(aniversario: string): void {
    this.aniversario = aniversario;
  }

  getTipo(): tipoContato {
    return this.tipo;
  }

  setTipo(tipo: tipoContato): void {
    this.tipo = tipo;
  }
}
