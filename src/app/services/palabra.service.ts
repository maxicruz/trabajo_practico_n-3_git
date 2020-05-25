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

  public obtenerPalabraIngles(unaPalabra: string): Array<string>{
    let arrayPalabra = new Array<string>();
    for(let i=0; i < unaPalabra.length; i++){
       arrayPalabra[i] = unaPalabra[i];
    }
    return arrayPalabra;
  }

  public obtenerPalabra(): Palabra{
    let indice = this.genererIndiceAleatorio(1, 10);
    let palabra: Palabra = this.listaPalabras[indice];
    return palabra;
  }

  /**
   * Retorna un número aleatorio entre min (incluido) y max (excluido)
   * @param min Desde (incluido)
   * @param max Hasta (excluido)
   */
  
  public genererIndiceAleatorio(min: number, max: number): number{
    let numero = Math.random() * (max - min) + min;
    numero = Math.trunc(numero - 1);
    return numero;
  }

}
