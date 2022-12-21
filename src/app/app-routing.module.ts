import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductComponent } from './product/product.component';
import { UpdatComponent } from './updat/updat.component';

const routes: Routes = [
  {path:'' , redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductComponent},
  {path:'editProduct/:id', component:UpdatComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
