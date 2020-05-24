import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra'

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  listaPalabras: Array<any>;

  constructor() { 
    this.listaPalabras = new Array<Palabra>();
    this.listaPalabras = [
    {
      id:1,
      palabraIngles:"wolf",
      palabraEspanol:"lobo",
      urlImagen:"assets/img/lobo.jpg",
    },
    {
      id:2,
      palabraIngles:"cat",
      palabraEspanol:"gato",
      urlImagen:"assets/img/gato.jpg",
    },
    {
      id:3,
      palabraIngles:"dog",
      palabraEspanol:"perro",
      urlImagen:"assets/img/perro.jpg",
    },
    {
      id:4,
      palabraIngles:"shark",
      palabraEspanol:"tiburon",
      urlImagen:"assets/img/tiburon.jpg",
    },
    {
      id:5,
      palabraIngles:"lion",
      palabraEspanol:"leon",
      urlImagen:"assets/img/leon.jpg",
    },
    {
      id:6,
      palabraIngles:"sheep",
      palabraEspanol:"oveja ",
      urlImagen:"assets/img/oveja.jpg",
    },
    {
      id:7,
      palabraIngles:"rabbit",
      palabraEspanol:"conejo",
      urlImagen:"assets/img/conejo.jpg",
    },
    {
      id:8,
      palabraIngles:"duck",
      palabraEspanol:"pato",
      urlImagen:"assets/img/pato.jpg",
    },
    {
      id:9,
      palabraIngles:"elefant",
      palabraEspanol:"elefante",
      urlImagen:"assets/img/elefante.jpg",
    },
    {
      id:10,
      palabraIngles:"pig",
      palabraEspanol:"chancho",
      urlImagen:"assets/img/chancho.jpg",
    },
  ]

  }

  getPalabras() {
    return this.listaPalabras; 
  }

}
