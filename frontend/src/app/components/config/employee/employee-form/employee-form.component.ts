import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../../../../model/config/employee.model';
import { Manager } from '../../../../model/config/manager.model';
import { Team } from '../../../../model/config/team.model';
import { DataService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { EmployeeServiceService as EmployeeService } from 'src/app/services/config/employee.service';

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
    private employeeService: EmployeeService
  ) {}

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
    const team: Team = { id: this.controls['team'].value };
    const manager: Employee = { id: this.controls['manager'].value };
    const employeeData: Employee = {
      ...this.employeeForm.value,
      manager: manager,
      team: null,
    };
    this.service.save(employeeData, this.endPoint).subscribe((response) => {
      this.employeeForm.reset();
      this.submitted = false;
    });
  }
}
