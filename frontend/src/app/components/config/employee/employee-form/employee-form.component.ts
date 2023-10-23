import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { Employee } from '../../../../model/config/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl:'./employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  controls: any = {
    "firstName": new FormControl('', []),
    "lastName": new FormControl('', []), 
    "dateOfBirth": new FormControl('', []),   
    "gender": new FormControl('', []),
    "nationalId": new FormControl('', []),
    "email": new FormControl('', []),
    "phone": new FormControl('', []),
    "address": new FormControl('', []),
    "emergencyContactName": new FormControl('', []),
    "emergencyContactPhone": new FormControl('', []),
    "hireDate": new FormControl('', []),
    "designation": new FormControl('', []),
    "department": new FormControl('', []),
    "manager": new FormControl('', []),
    "employeeStatus": new FormControl('', []),    
    "salary": new FormControl('', []),
    "payFrequency": new FormControl(0, []),
    "payRate": new FormControl(0, []),
    "healthInsurance": new FormControl(0, []),
    "retirementPlans": new FormControl(0, []),
    "otherBenefits": new FormControl(0, []),
    "performanceReviews": new FormControl(0, []),
    "trainingRecords": new FormControl(0, []),
    "certifications": new FormControl(0, []),
    "terminationDate": new FormControl(0, []),
    "reasonForTermination": new FormControl(0, []),
    "team": new FormControl(0, [])
    
  };
  submitted = false;
  endPoint = "employee";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {      
      populateFormControl(this.employeeForm.controls, this.data);
    }
  }

  createForm() {
    this.employeeForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    const employeeData: Employee = { ...this.employeeForm.value };
    this.service.save(employeeData, this.endPoint).subscribe(response => {
      this.employeeForm.reset();
      this.submitted = false;
    });
  }
}