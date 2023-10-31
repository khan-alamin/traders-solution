import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Permission } from '../../../../model/auth/permission.model';
import { Order } from '../../../../model/data/order.model';
import { DataService } from '../../../../services/crud.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = [
    'OrderDate',
    'customer',
    'employee',
    'paymentMethod',
    'paymentDate',
    'shippingAddress',
    'billingAddress',
    'orderStatus',
    'totalAmount',
    'taxAmount',
    'discountAmount',
    'shippingFee',
    'invoiceReceiptNumber',
    'notesComments',
    'deliveryDate',
    'returnExchangeRequest',
    'returnExchangeDate',
    'actions'];
  dataSource: Order[] = [];

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('order').then((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "order").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/order-form']);
  }



  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }



}
