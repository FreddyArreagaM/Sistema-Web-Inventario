import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  producto: Producto = new Producto();
  id: number;

  constructor(private productoServicio: ProductoService, private _router: Router ,private _aRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = this._aRoute.snapshot.params['id'];
    this.productoServicio.getProductByID(this.id).subscribe(
      {
        next: (data) => {
          this.producto = data
        },
        error: (error) =>{
          console.log(error);
        }
      }
    )
  }

  onSubmit(){
    this.actualizarProducto();
  }

  actualizarProducto(){
    this.productoServicio.updateProduct(this.id, this.producto).subscribe(
      {
        next: (data) =>{
          this.listaProducto();
        },
        error: (error) =>{
          console.log(error);
        }
      }
    )
  }

  listaProducto(){
    this._router.navigate(['/productos'])
  }
  
}
