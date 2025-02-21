import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlback= "http://localhost:8080/inventary"

  constructor(private http: HttpClient) { }

  getProducts(): Observable <Producto[]>{
    return this.http.get<Producto[]>(this.urlback + '/products');
  }

  savedProduct(producto: Producto): Observable <Object>{
    return this.http.post(this.urlback + '/saved-product', producto);
  }

  getProductByID(idProducto: number){
    return this.http.get<Producto>(this.urlback + '/product/'+ `${idProducto}`);
  }

  updateProduct(idProducto: number, producto: Producto): Observable <Object>{
    return this.http.put(this.urlback + '/update-product/'+ `${idProducto}`, producto);
  }

  deleteProduct(idProducto: number): Observable <Object>{
    return this.http.delete(this.urlback + '/delete-product/'+ `${idProducto}`);
  }
}
