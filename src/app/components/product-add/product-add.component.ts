import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent{
  producto: Producto = new Producto();
  
  constructor(private _productoService: ProductoService, private _route: Router){}

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this._productoService.savedProduct(this.producto).subscribe(
      {
        next: (data) => {
          this.listaProducto();
        }, 
        error: (error: any) => {
          console.log(error);
        }
      }
    )
  }

  listaProducto(){
    this._route.navigate(['/productos']);
  }
  
}
