import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Order } from '../../../../model/data/order.model';
import { DataService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';

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
  submitted = false;
  endPoint = "order";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {      
      populateFormControl(this.orderForm.controls, this.data);
    }
  }

  createForm() {
    this.orderForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.orderForm.invalid) {
      return;
    }
    const orderData: Order = { ...this.orderForm.value };
    this.service.save(orderData, this.endPoint).subscribe(response => {
      this.orderForm.reset();
      this.submitted = false;
    });
  }
}

