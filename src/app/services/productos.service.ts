import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargado:boolean = false;

  constructor(public http:Http) { 
    this.cargar_productos();
  }

  
public cargar_productos(){

  this.cargado = false;
  this.http.get('https://webangular-4f410.firebaseio.com/productos_idx.json') 
            .subscribe( res => {
              console.log(res);
              this.cargado = true;
              this.productos = res.json();
            });
}

}
