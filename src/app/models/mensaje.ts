export class Mensaje {
  num:number;
  text:string;
  msj:string;
  tamMaxCaracteres:number;
  tamActCaracteres:number;

  constructor(num?: number, text?: string, msj?: string, tamMaxCaracteres?: number, tamActCaracteres?:number) {
    this.num = num;
    this.text = text;
    this.msj = msj;
    this.tamMaxCaracteres = tamMaxCaracteres;
    this.tamActCaracteres = tamActCaracteres;
  }
}
