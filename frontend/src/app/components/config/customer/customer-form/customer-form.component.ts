import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Customer } from '../../../../model/config/customer.model';
import { DataService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm!: FormGroup;
  controls: any = {
    "firstName": new FormControl('', [Validators.required]),
    "lastName": new FormControl('', [Validators.required]),
    "email": new FormControl('', []),
    "phone": new FormControl('', [Validators.required]),
    "address": new FormControl('', [Validators.required]),
    "billingAddress": new FormControl('', [Validators.required]),
    "companyName": new FormControl('', [Validators.required]),
    "tin": new FormControl('', []),
    "dateOfRegistration": new FormControl('', []),
    "customerCategory": new FormControl('', []),
    "creditLimit": new FormControl(0, [Validators.required]),
  };
  submitted = false;
  endPoint = "customer";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {      
      populateFormControl(this.customerForm.controls, this.data);
    }
  }

  createForm() {
    this.customerForm = this.formBuilder.group(this.controls);
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
