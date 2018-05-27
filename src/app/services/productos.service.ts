import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargado:boolean = false;

  constructor(public http:Http) { 
    this.cargar_productos();
  }

  
  public buscar_productos(termino:string){
    
    if(this.productos.length === 0){
      this.cargar_productos().then( ()=>{
        //Terminó la carga de los productos
        this.filtrar_productos(termino);
      });
    }else{
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino:string){

    this.productos_filtrado = []

    termino.toLowerCase();

    this.productos.forEach(prod =>{

      if(prod.categoria.indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0 ){
        this.productos_filtrado.push(prod);
      }
        console.log(prod);
    });

    
  }

public cargar_productos(){

  this.cargado = false;

  let promesa = new Promise((resolve, reject)=>{

    this.http.get('https://webangular-4f410.firebaseio.com/productos_idx.json') 
            .subscribe( res => {
              //console.log(res);
              this.cargado = true;
              this.productos = res.json();
              resolve();
            });

  });
  return promesa;
}

public cargar_producto(cod:string){

  return this.http.get('https://webangular-4f410.firebaseio.com/productos/'+cod+'.json');

}

}
