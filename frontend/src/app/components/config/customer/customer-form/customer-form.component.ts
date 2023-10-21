import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../../../model/config/customer.model';
import { DataService } from '../../../../services/data.service';
import { Permission } from '../../../../model/auth/permission';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm!: FormGroup;
  submitted = false;
  endPoint = "customer";

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      address: [''],
      billingAddress: [''],
      companyName: [''],
      tin: [''],
      dateOfRegistration: [''],
      customerCategory: [''],
      creditLimit: [''],
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.customerForm.invalid) {
      return;
    }
    const customerData: Customer = { ...this.customerForm.value };
    this.service.save(customerData, this.endPoint).subscribe(response => {
      this.customerForm.reset();
      this.submitted = false;
    });
  }
}
