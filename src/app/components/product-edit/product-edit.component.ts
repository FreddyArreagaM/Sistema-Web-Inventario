import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private productoServicio: ProductoService, private _aRoute: ActivatedRoute){

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
    //editarProducto
      
  }

}
