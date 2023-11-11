import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeServiceService as EmployeeService } from 'src/app/services/config/employee.service';
import { Employee } from '../../../../model/config/employee.model';
import { Manager } from '../../../../model/config/manager.model';
import { DataService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { User } from '../../../../model/auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  controls: any = {
    firstName: new FormControl('', []),
    lastName: new FormControl('', []),
    dateOfBirth: new FormControl('', []),
    gender: new FormControl('', []),
    nationalId: new FormControl('', []),
    email: new FormControl('', []),
    phone: new FormControl('', []),
    address: new FormControl('', []),
    emergencyContactName: new FormControl('', []),
    emergencyContactPhone: new FormControl('', []),
    hireDate: new FormControl('', []),
    designation: new FormControl('', []),
    department: new FormControl('', []),
    manager: new FormControl('', []),
    employeeStatus: new FormControl('', []),
    salary: new FormControl('', []),
    payFrequency: new FormControl('', []),
    payRate: new FormControl('', []),
    healthInsurance: new FormControl('', []),
    retirementPlans: new FormControl('', []),
    otherBenefits: new FormControl('', []),
    performanceReviews: new FormControl('', []),
    trainingRecords: new FormControl('', []),
    certifications: new FormControl('', []),
    terminationDate: new FormControl('', []),
    reasonForTermination: new FormControl('', []),
    team: new FormControl('', []),
  };
  submitted = false;
  endPoint = 'employee';
  data: any = {};
  managers: Manager[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: DataService,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.employeeForm.controls, this.data);
    }
    this.employeeService.getManagers().then((res) => {
      this.managers = res.data as Manager[];
    });
  }

  createForm() {
    this.employeeForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }

    // const user: User = {
    //   username: this.controls.value.username,
    //   password: this.controls.value.password,
    //   roles: this.controls.value.role,
    // }
    const manager: Employee = { id: this.controls['manager'].value };
    const employeeData: Employee = {
      ...this.employeeForm.value,
      manager: manager,
      team: null,
    };
    this.service.save(employeeData, this.endPoint).subscribe((response) => {
      this.employeeForm.reset();
      this.submitted = false;
      this.router.navigate(['/employee-list']);
    });
  }
}
