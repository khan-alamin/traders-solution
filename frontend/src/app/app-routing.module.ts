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
import { SupplierFormComponent } from './components/config/supplier/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/config/supplier/supplier-list/supplier-list.component';
import { TeamFormComponent } from './components/config/team/team-form/team-form.component';
import { TeamListComponent } from './components/config/team/team-list/team-list.component';
import { AttachmentFormComponent } from './components/data/attachment/attachment-form/attachment-form.component';
import { AttachmentListComponent } from './components/data/attachment/attachment-list/attachment-list.component';
import { AuditTrailFormComponent } from './components/data/audit-trail/audit-trail-form/audit-trail-form.component';
import { AuditTrailListComponent } from './components/data/audit-trail/audit-trail-list/audit-trail-list.component';
import { InventoryFormComponent } from './components/data/inventory/inventory-form/inventory-form.component';
import { InventoryListComponent } from './components/data/inventory/inventory-list/inventory-list.component';
import { NotificationFormComponent } from './components/data/notification/notification-form/notification-form.component';
import { NotificationListComponent } from './components/data/notification/notification-list/notification-list.component';
import { OrderFormComponent } from './components/data/order/order-form/order-form.component';
import { OrderListComponent } from './components/data/order/order-list/order-list.component';
import { PurchaseFormComponent } from './components/data/purchase/purchase-form/purchase-form.component';
import { PurchaseListComponent } from './components/data/purchase/purchase-list/purchase-list.component';
import { ApprovableFormComponent } from './components/super/approvable/approvable-form/approvable-form.component';
import { ApprovableListComponent } from './components/super/approvable/approvable-list/approvable-list.component';
import { AuditAbleFormComponent } from './components/super/audit-able/audit-able-form/audit-able-form.component';
import { AuditAbleListComponent } from './components/super/audit-able/audit-able-list/audit-able-list.component';
import { BaseFormComponent } from './components/super/base/base-form/base-form.component';
import { BaseListComponent } from './components/super/base/base-list/base-list.component';
import { SettingFormComponent } from './components/config/setting/setting-form/setting-form.component';
import { SettingListComponent } from './components/config/setting/setting-list/setting-list.component';

const routes: Routes = [
  { path: 'role-form', component: RoleFormComponent },
  { path: 'role-list', component: RoleListComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'product-form', component: ProductFormComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'setting-form', component: SettingFormComponent },
  { path: 'setting-list', component: SettingListComponent },
  { path: 'supplier-form', component: SupplierFormComponent  },
  { path: 'supplier-list', component: SupplierListComponent },
  { path: 'team-form', component: TeamFormComponent },
  { path: 'team-list', component: TeamListComponent },
  { path: 'attachment-form', component: AttachmentFormComponent },
  { path: 'attachment-list', component: AttachmentListComponent },
  { path: 'audittrail-form', component: AuditTrailFormComponent },
  { path: 'audittrail-list', component: AuditTrailListComponent },
  { path: 'inventory-form', component: InventoryFormComponent },
  { path: 'inventory-list', component: InventoryListComponent },
  { path: 'notification-form', component: NotificationFormComponent },
  { path: 'notification-list', component: NotificationListComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'purchase-form', component: PurchaseFormComponent },
  { path: 'purchase-list', component: PurchaseListComponent },
  { path: 'approvable-form', component: ApprovableFormComponent },
  { path: 'approvable-list', component: ApprovableListComponent },
  { path: 'auditable-form', component: AuditAbleFormComponent },
  { path: 'auditable-list', component: AuditAbleListComponent },
  { path: 'base-form', component: BaseFormComponent },
  { path: 'base-list', component: BaseListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
