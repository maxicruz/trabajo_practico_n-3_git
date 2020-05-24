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
  listaPalabras:Array<any>;
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  cantidad_vida: number=6;
  cantidad_puntaje: number=0;
  mostrar: boolean=false;
  palabraOculta = "";
  gano = false;
  perdio = false;

  constructor(private palabraService: PalabraService) {
    this.listaPalabras = new Array<Palabra>();
    this.listaPalabras = [
     { 
        id:1,
        palabraIngles:"wolf",
        palabraEspanol:"lobo",
        urlImagen:"lobo.jpg",
      },
      {
        id:2,
        palabraIngles:"cat",
        palabraEspanol:"gato",
        urlImagen:"gato.jpg",
      },
      {
        id:3,
        palabraIngles:"dog",
        palabraEspanol:"perro",
        urlImagen:"perro.jpg",
      },
      {
        id:4,
        palabraIngles:"shark",
        palabraEspanol:"tiburon",
        urlImagen:"tiburon.jpg",
      },
      {
        id:5,
        palabraIngles:"lion",
        palabraEspanol:"leon",
        urlImagen:"leon.jpg",
      },
      {
        id:6,
        palabraIngles:"sheep",
        palabraEspanol:"oveja ",
        urlImagen:"oveja.jpg",
      },
      {
        id:7,
        palabraIngles:"rabbit",
        palabraEspanol:"conejo",
        urlImagen:"conejo.jpg",
      },
      {
        id:8,
        palabraIngles:"duck",
        palabraEspanol:"pato",
        urlImagen:"pato.jpg",
      },
      {
        id:9,
        palabraIngles:"elefant",
        palabraEspanol:"elefante",
        urlImagen:"elefante.jpg",
      },
      {
        id:10,
        palabraIngles:"pig",
        palabraEspanol:"chancho",
        urlImagen:"chancho.jpg",
      },
    ]

  }

  ngOnInit(): void {

  }

  getPalabras(){
    return this.listaPalabras; 
  }

  public iniciarJuego(){
    this.mostrar=true;
  }

  verificaGanador() {
    const palabraArr = this.palabraOculta.split(" ");
    const palabraEvaluar = palabraArr.join("");

    if(palabraEvaluar === this.palabra.palabraIngles)
    this.gano = true;
    console.log("Usuario GANO");
    {
      if (this.cantidad_vida === 6) {
        this.perdio = true;
        console.log("Usuario perdio");
      }
    }
  }

  comprobar(letra) {
    this.existeLetra(letra);
    const palabraOcultaArreglo = this.palabraOculta.split(" ");

    for (let i = 0; i <= this.palabraService.listaPalabras.length; i++) {
      if (this.palabraService.listaPalabras[i] === letra) {
        palabraOcultaArreglo[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArreglo.join(" ");
    this.verificaGanador();
  }

  existeLetra(letra) {
    if (this.listaPalabras.indexOf(letra) >= 0) {
      
    } else {
      this.cantidad_vida-1;
    }
  }


}
