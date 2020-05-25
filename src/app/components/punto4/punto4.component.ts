import { Component, OnInit } from '@angular/core';
import { Palabra } from '../../models/palabra';
import { PalabraService } from './../../services/palabra.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  palabra: Palabra;
  palabraIngles: Array<string>;
  respuesta: Array<string>;
  vidas: number = 6;
  puntos: number = 0;
  jugando: boolean = false;
  mostrar = false;
  gano = false;
  perdio = false;
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(private PalabraService: PalabraService) {
      this.palabra = new Palabra();
      this.palabraIngles = new Array<string>();
      this.respuesta = new Array<string>();
  }

  iniciarJuego(){
    this.mostrar=true;
  }

  comprobarPalabra(indice: number){
    if(this.palabraIngles[indice] != this.respuesta[indice]){
      this.vidas--;
    }
    if(this.palabraIngles.length == this.respuesta.length){
      if(this.esIgual()){
         this.puntos++;
         this.siguienteNivel();
      }
    }
  }
 
  esIgual(): boolean{
     for(let i=0; i < this.palabraIngles.length; i++){
       if(this.respuesta[i] != this.palabraIngles[i]){
         return false;
       }
     }
     return true;
  }

  siguienteNivel(){
    this.palabra = this.PalabraService.obtenerPalabra();
    this.palabraIngles = this.PalabraService.obtenerPalabraIngles(this.palabra.palabraIngles);
    this.respuesta = new Array<string>();
  }

  iniciarNivel(){
    console.log("Nivel iniciado");
    this.jugando = true;
    this.palabra = this.PalabraService.obtenerPalabra();
    this.palabraIngles = this.PalabraService.obtenerPalabraIngles(this.palabra.palabraIngles);
    this.vidas = 6;
    this.puntos = 0;
  }

  ngOnInit(): void {

  }

}
