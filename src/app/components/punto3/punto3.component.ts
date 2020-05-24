import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../models/pasaje';
import { PasajeService } from './../../services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  venta: Pasaje;
  vector_ventas: Array<Pasaje>;
  precio_descuento: number=0;
  precio_actual: number=0;
  mostrar: boolean=false;
  pasajes: Array<any>;

  constructor(private pasajeService:PasajeService) { 
    this.venta = new Pasaje(); 
    this.vector_ventas = new Array<Pasaje>();
    this.listaVenta();

    this.pasajes = [ { 
      "dniPasajero": "36183257", 
      "precioPasaje": "2000",
      "categoriaPasajero": "Menor", 
      "fechaCompra": "2016-05-10T14:48:34-08:00", 
      },
      { 
        "dniPasajero": "32123257", 
        "precioPasaje": "3000",
        "categoriaPasajero": "Jubilado", 
        "fechaCompra": "2018-09-08T14:48:34-08:00", 
      },
      { 
        "dniPasajero": "76178257", 
        "precioPasaje": "1000",
        "categoriaPasajero": "Adulto", 
        "fechaCompra": "2018-12-05T14:48:34-08:00", 
      },
      { 
        "dniPasajero": "16183662", 
        "precioPasaje": "3000",
        "categoriaPasajero": "Jubilado", 
        "fechaCompra": "2019-11-01T14:48:34-08:00", 
        },
        { 
          "dniPasajero": "36183653", 
          "precioPasaje": "2000",
          "categoriaPasajero": "Menor", 
          "fechaCompra": "2020-07-02T14:48:34-08:00", 
          },
          { 
            "dniPasajero": "26183223", 
            "precioPasaje": "2000",
            "categoriaPasajero": "Adulto", 
            "fechaCompra": "2017-01-04T14:48:34-08:00", 
            },
            { 
              "dniPasajero": "16183662", 
              "precioPasaje": "3000",
              "categoriaPasajero": "Jubilado", 
              "fechaCompra": "2019-11-06T14:48:34-08:00", 
              },
              { 
                "dniPasajero": "36183653", 
                "precioPasaje": "2000",
                "categoriaPasajero": "Menor", 
                "fechaCompra": "2020-07-09T14:48:34-08:00", 
                },
                { 
                  "dniPasajero": "26183223", 
                  "precioPasaje": "2000",
                  "categoriaPasajero": "Adulto", 
                  "fechaCompra": "2017-01-09T14:48:34-08:00", 
                  },
                  { 
                    "dniPasajero": "16183662", 
                    "precioPasaje": "3000",
                    "categoriaPasajero": "Jubilado", 
                    "fechaCompra": "2019-11-09T14:48:34-08:00", 
                    },
                    { 
                      "dniPasajero": "36183653", 
                      "precioPasaje": "2000",
                      "categoriaPasajero": "Menor", 
                      "fechaCompra": "2020-07-09T14:48:34-08:00", 
                      },
                      { 
                        "dniPasajero": "26183223", 
                        "precioPasaje": "2000",
                        "categoriaPasajero": "Adulto", 
                        "fechaCompra": "2017-01-09T14:48:34-08:00", 
                        },
    ] 
  }

  ngOnInit(): void {
  }

  public guardarVenta(){
    if(this.venta.dniPasajero==0 || this.venta.precioPasaje==0 || this.venta.categoriaPasajero==null || this.venta.dniPasajero==null || this.venta.precioPasaje==null){
      alert("Ingrese todos los campos");
    }else{
      this.venta.fechaCompra = new Date();
      this.pasajeService.guardarVenta(this.venta);
      this.venta= new Pasaje;
      this.mostrar=false;
      this.precio_descuento=0;
      this.precio_actual=0;
    }
  }

  public listaVenta(){
    this.vector_ventas=this.pasajeService.listaVenta();
  }

  public limpiarVenta(){
    this.venta= new Pasaje;
  }

  public calcularDescuento(){
    if(this.venta.categoriaPasajero=='m')
    {
      this.precio_descuento=(this.venta.precioPasaje*25)/100;
      this.precio_actual=this.venta.precioPasaje-this.precio_descuento;
      this.mostrar=true;
    }
    if(this.venta.categoriaPasajero=='j')
    {
      this.precio_descuento=(this.venta.precioPasaje*50)/100;
      this.precio_actual=this.venta.precioPasaje-this.precio_descuento;
      this.mostrar=true;
    }
  }

}
