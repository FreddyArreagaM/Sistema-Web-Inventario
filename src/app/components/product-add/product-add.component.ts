import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent{
  producto: Producto = new Producto();
  
  constructor(private _productoService: ProductoService, private _route: Router, private _toastrService: ToastrService){}

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){  
    if(this.producto.descripcion == null || this.producto.precio == null || this.producto.existencia == null){
      this._toastrService.error('Campos Vacíos', 'Oops...', {
        timeOut: 3000,
      });
      
    }else{
      this._productoService.savedProduct(this.producto).subscribe(
        {
          next: (data) => {
            this._toastrService.success('Producto agregado', 'Enhorabuena!', {
              timeOut: 3000,
            });
            this.listaProducto();
          }, 
          error: (error: any) => {
            this._toastrService.error('Intenta nuevamente', 'Oops...', {
              timeOut: 3000,
            });
            //console.log(error);
          }
        }
      )
    }


  }

  listaProducto(){
    this._route.navigate(['/productos']);
  }
  
}
