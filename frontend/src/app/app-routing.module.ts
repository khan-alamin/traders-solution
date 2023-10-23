import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleFormComponent } from './components/auth/role/role-form/role-form.component';
import { RoleListComponent } from './components/auth/role/role-list/role-list.component';
import { CustomerFormComponent } from './components/config/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './components/config/customer/customer-list/customer-list.component';
import { EmployeeFormComponent } from './components/config/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/config/employee/employee-list/employee-list.component';
import { ProductFormComponent } from './components/config/product/product-form/product-form.component';
import { ProductListComponent } from './components/config/product/product-list/product-list.component';

const routes: Routes = [
  { path: 'role-form', component: RoleFormComponent },
  { path: 'role-list', component: RoleListComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'product-form', component: ProductFormComponent},
  { path: 'product-list', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
