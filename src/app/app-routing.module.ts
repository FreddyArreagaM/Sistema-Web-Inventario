import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

// http:localhost:4200/productos
const routes: Routes = [
  
  {
    path: '', redirectTo: 'productos', pathMatch: 'full'
  },

  {
    path: 'productos', component: ProductoListaComponent
  },

  {
    path: 'agregar-producto', component: ProductAddComponent
  },

  {
    path: '**', redirectTo: 'productos', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
