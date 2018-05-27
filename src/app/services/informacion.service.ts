import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;

  info_about:any[] = [];
  cargada_about:boolean = false;

  constructor(public http:Http) { 

    this.carga_info();
    this.carga_about();

  }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
              .subscribe(data =>{
                this.info = data.json();
                this.cargada = true;
              })
  }

  public carga_about(){
    this.http.get("https://webangular-4f410.firebaseio.com/equipo.json")
              .subscribe(data =>{
                this.info_about = data.json();
                this.cargada_about = true;
                //console.log(data)
              })
  }

}
