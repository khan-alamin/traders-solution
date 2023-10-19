import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      billingAddress: [''],
      companyName: [''],
      tin: [''],
      dateOfRegistration: [''],
      customerCategory: [''],
      creditLimit: ['']
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      // Handle form submission here
      console.log(this.customerForm.value);
    }
  }

}
