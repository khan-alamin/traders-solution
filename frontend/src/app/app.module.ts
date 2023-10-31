import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RoleFormComponent } from './components/auth/role/role-form/role-form.component';
import { RoleListComponent } from './components/auth/role/role-list/role-list.component';
import { CustomerListComponent } from './components/config/customer/customer-list/customer-list.component';
import { EmployeeFormComponent } from './components/config/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/config/employee/employee-list/employee-list.component';
import { ProductFormComponent } from './components/config/product/product-form/product-form.component';
import { ProductListComponent } from './components/config/product/product-list/product-list.component';
import { SupplierFormComponent } from './components/config/supplier/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/config/supplier/supplier-list/supplier-list.component';
import { TeamFormComponent } from './components/config/team/team-form/team-form.component';
import { TeamListComponent } from './components/config/team/team-list/team-list.component';
import { AttachmentFormComponent } from './components/data/attachment/attachment-form/attachment-form.component';
import { AttachmentListComponent } from './components/data/attachment/attachment-list/attachment-list.component';
import { AuditTrailFormComponent } from './components/data/audit-trail/audit-trail-form/audit-trail-form.component';
import { AuditTrailListComponent } from './components/data/audit-trail/audit-trail-list/audit-trail-list.component';
import { NotificationFormComponent } from './components/data/notification/notification-form/notification-form.component';
import { NotificationListComponent } from './components/data/notification/notification-list/notification-list.component';
import { OrderFormComponent } from './components/data/order/order-form/order-form.component';
import { OrderListComponent } from './components/data/order/order-list/order-list.component';
import { PurchaseFormComponent } from './components/data/purchase/purchase-form/purchase-form.component';
import { PurchaseListComponent } from './components/data/purchase/purchase-list/purchase-list.component';
import { CustomerFormComponent } from './components/config/customer/customer-form/customer-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';









@NgModule({
  declarations: [
    AppComponent,
    RoleFormComponent,
    RoleListComponent,
    CustomerListComponent,
    CustomerFormComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    ProductFormComponent,
    ProductListComponent,
    SupplierFormComponent,
    SupplierListComponent,
    TeamFormComponent,
    TeamListComponent,
    AttachmentFormComponent,
    AttachmentListComponent,
    AuditTrailFormComponent,
    AuditTrailListComponent,
    NotificationFormComponent,
    NotificationListComponent,
    OrderFormComponent,
    OrderListComponent,
    PurchaseFormComponent,
    PurchaseListComponent,


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
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatRadioModule,
    NgxMatFileInputModule,
    NgbModule




  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
