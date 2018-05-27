import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {

  producto:any = undefined;
  cod_prod:any = undefined;

  constructor(private route:ActivatedRoute,
              private _ps:ProductosService) { 

    route.params.subscribe(parametros =>{
      //console.log(parametros['id']);

      this.cod_prod = parametros['id'];
      _ps.cargar_producto(this.cod_prod)
          .subscribe(res =>{
            this.producto = res.json();
            //console.log(this.producto);
          })

    });
  }

}
