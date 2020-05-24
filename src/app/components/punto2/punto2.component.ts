import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../models/asistente';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  email: string="";
  nombreOrganizacion:string = "";
  solicitaConstancia:boolean;
  usuario: Usuario = null;
  usuarios:Array<Usuario> = new Array();

  constructor() { }

  ngOnInit(): void {
  }
  
  
  registrar():void{
    if(this.email=="" || this.nombreOrganizacion=="" || this.solicitaConstancia==null || this.email==null || this.nombreOrganizacion==null){
      alert("Ingrese todos los campos");
    }else{
      console.log(this.email+this.nombreOrganizacion+this.solicitaConstancia);
      this.usuario = new Usuario(this.email,this.nombreOrganizacion,this.solicitaConstancia);
      this.usuarios.push(this.usuario);
    }

  }

}

export class Usuario {
  constructor(public email:string, public nombreOrganizacion:string, public solicitaConstancia:boolean) { 
    
  }
  
}
