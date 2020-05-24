import { Component, OnInit } from '@angular/core';
import {Mensaje} from '../../models/mensaje';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  num:number;
  text:string = "";
  msj:string = "";
  tamMaxCaracteres:number=120;
  tamActCaracteres:number=0;
  mensajeEnviado:string = "";
  estadomensaje = "";
  mostrar: boolean=false;

	constructor() { }

	ngOnInit(): void {
  }
  
    public modificarCadena():void{
        this.tamActCaracteres = this.msj.length;
        console.log(this.msj);
    }

    enviar(): void {
      if(this.num==0 || this.text=="" || this.msj=="" || this.num==null || this.text==null || this.msj==null){
        alert(" Ingrese todos los campos ");
          this.estadomensaje = " Mensaje Fallido ";
          this.mostrar=true;
      }else{
        this.mensajeEnviado = "Su mensaje ha sido enviado\nPara: "+this.num+" \nDe: "+this.text+" \nMensaje: "+this.msj;
        alert(this.mensajeEnviado);
          this.estadomensaje = " Mensaje Enviado ";
          this.mostrar=true;
      }
    }

    limpiar(): void {
      this.num==0;
      this.text=="";
      this.msj=="";
      this.tamMaxCaracteres=120;
      this.tamActCaracteres=0;
      this.mensajeEnviado=="";
      this.mostrar=false;
    }
  
}
