import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  vector_ventas: Array<Pasaje>;

  constructor() {
    this.vector_ventas = new Array<Pasaje>();
  }

  listaVenta() {
    return this.vector_ventas;
  }

  guardarVenta(venta: Pasaje) {
    this.vector_ventas.push(venta);
  }

  getPasajes() {  
    return this.vector_ventas; 
  }

}
