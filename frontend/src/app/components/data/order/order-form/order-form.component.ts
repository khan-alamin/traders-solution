import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Order } from '../../../../model/data/order.model';
import { DataService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/config/employee.model';
import { Product } from 'src/app/model/config/product.model';
import { AppResponse } from 'src/app/dto/response.dto';
import { Page } from 'src/app/dto/page.dto';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderForm!: FormGroup;
  controls: any = {
    "OrderDate": new FormControl('', []),
    "customer": new FormControl('', []),
    "employee": new FormControl('', []),
    "paymentMethod": new FormControl('', []),
    "paymentDate": new FormControl('', []),
    "shippingAddress": new FormControl('', []),
    "billingAddress": new FormControl('', []),
    "orderStatus": new FormControl('', []),
    "totalAmount": new FormControl('', []),
    "taxAmount": new FormControl('', []),
    "discountAmount": new FormControl('', []),
    "shippingFee": new FormControl('', []),
    "invoiceReceiptNumber": new FormControl('', []),
    "notesComments": new FormControl('', []),
    "deliveryDate": new FormControl('', []),
    "returnExchangeRequest": new FormControl('', []),
    "returnExchangeDate": new FormControl('', []),
  };


  products: Product[] = [];


  displayedColumns: string[] = [
    'name',
    'quantity',
    'rate',
    'amount'];

  submitted = false;
  endPoint = "order";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: DataService, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.orderForm.controls, this.data);
    }

    this.service.getList('product').subscribe((res: AppResponse<Page>) => {
      this.products = res.data.content
    }
    );


  }

  createForm() {
    this.orderForm = this.formBuilder.group({
      ...this.controls,
      products:this.formBuilder.array([])
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.orderForm.invalid) {
      return;
    }
    const employee: Employee = { id:Number(this.orderForm.value.employee) };
    const orderData: Order = { ...this.orderForm.value, employee:employee};
    this.service.save(orderData, this.endPoint).subscribe(response => {
      this.orderForm.reset();
      this.submitted = false;
      this.router.navigate(['order-list']);
    });
  }
}

