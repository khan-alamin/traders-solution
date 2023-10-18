import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RoleFormComponent } from './components/auth/role/role-form/role-form.component';
import { RoleListComponent } from './components/auth/role/role-list/role-list.component';
import { CustomerFormComponent } from './components/config/customer-form/customer-form.component';
import { CustomerListComponent } from './components/config/customer-list/customer-list.component';
import { EmployeeFormComponent } from './components/config/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/config/employee-list/employee-list.component';
import { ProductFormComponent } from './components/config/product-form/product-form.component';
import { ProductListComponent } from './components/config/product-list/product-list.component';
import { SettingFormComponent } from './components/config/setting-form/setting-form.component';
import { SettingListComponent } from './components/config/setting-list/setting-list.component';
import { SupplierFormComponent } from './components/config/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/config/supplier-list/supplier-list.component';
import { TeamFormComponent } from './components/config/team-form/team-form.component';
import { TeamListComponent } from './components/config/team-list/team-list.component';
import { AttachmentFormComponent } from './components/data/attachment-form/attachment-form.component';
import { AttachmentListComponent } from './components/data/attachment-list/attachment-list.component';
import { AuditTrailFormComponent } from './components/data/audit-trail-form/audit-trail-form.component';
import { AuditTrailListComponent } from './components/data/audit-trail-list/audit-trail-list.component';
import { InventoryFormComponent } from './components/data/inventory-form/inventory-form.component';
import { InventoryListComponent } from './components/data/inventory-list/inventory-list.component';
import { NotificationFormComponent } from './components/data/notification-form/notification-form.component';
import { NotificationListComponent } from './components/data/notification-list/notification-list.component';
import { OrderFormComponent } from './components/data/order-form/order-form.component';
import { OrderListComponent } from './components/data/order-list/order-list.component';
import { PurchaseFormComponent } from './components/data/purchase-form/purchase-form.component';
import { PurchaseListComponent } from './components/data/purchase-list/purchase-list.component';
import { ApprovableFormComponent } from './components/super/approvable-form/approvable-form.component';
import { ApprovableListComponent } from './components/super/approvable-list/approvable-list.component';
import { AuditAbleFormComponent } from './components/super/audit-able-form/audit-able-form.component';
import { AuditAbleListComponent } from './components/super/audit-able-list/audit-able-list.component';
import { BaseFormComponent } from './components/super/base-form/base-form.component';
import { BaseListComponent } from './components/super/base-list/base-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoleFormComponent,
    RoleListComponent,    
    CustomerFormComponent,
    CustomerListComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    ProductFormComponent,
    ProductListComponent,
    SettingFormComponent,
    SettingListComponent,
    SupplierFormComponent,
    SupplierListComponent,
    TeamFormComponent,
    TeamListComponent,
    AttachmentFormComponent,
    AttachmentListComponent,
    AuditTrailFormComponent,
    AuditTrailListComponent,
    InventoryFormComponent,
    InventoryListComponent,
    NotificationFormComponent,
    NotificationListComponent,
    OrderFormComponent,
    OrderListComponent,
    PurchaseFormComponent,
    PurchaseListComponent,
    ApprovableFormComponent,
    ApprovableListComponent,
    AuditAbleFormComponent,
    AuditAbleListComponent,
    BaseFormComponent,
    BaseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
