import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit{
  productos: Producto[];
  
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    //Consumir los datos del observable (suscribirnos)
    //Se aplica el patrón de diseño Observable
    this._productoService.getProducts().subscribe(data =>{
      console.log(data);
      this.productos = data;
      console.log(this.productos);
    })
  }


}
