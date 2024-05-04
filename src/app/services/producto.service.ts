import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlback= "http://localhost:8080/inventario-app"

  constructor(private http: HttpClient) { }

  //Metodo para consumir el endpoint para listar todos los productos
  getProducts(): Observable <Producto[]>{
    return this.http.get<Producto[]>(this.urlback + '/productos');
  }

  savedProduct(producto: Producto): Observable <Object>{
    return this.http.post(this.urlback + '/saved-producto', producto);
  }

  getProductByID(idProducto: number){
    return this.http.get<Producto>(this.urlback + '/producto/'+ `${idProducto}`);
  }

}
