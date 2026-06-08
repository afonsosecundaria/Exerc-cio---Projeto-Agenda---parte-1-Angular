export enum tipoContato {
    AMIGO = 'Amigo',
    IFRN = 'IFNR',
    TRABALHO = 'Trabalho',
    FAMILIA = 'Família',
    OUTRO = 'Outro'
}


export class Contato {
    protected nome: string
    protected telefone: string
    protected email: string
    aniversario: Date
    tipo: tipoContato
    constructor(nome: string, teleforne: string, email: string, aniversario: string, tipo: tipoContato){
      this.nome = nome
      this.telefone = teleforne
      this.email = email
      this.aniversario = new Date()
      this.tipo = tipo
    }
}