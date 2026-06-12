export enum tipoContato {
    AMIGO = 'Amigo',
    IFRN = 'IFRN',
    TRABALHO = 'Trabalho',
    FAMILIA = 'Família',
    OUTRO = 'Outro'
}


export class Contato {
    public nome: string
    public telefone: string
    public email: string
    public aniversario: string
    public tipo: tipoContato
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
}
