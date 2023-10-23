import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Employee } from '../../../../model/config/employee.model';
import { DataService } from '../../../../services/crud.service';
import { Permission } from 'src/app/model/auth/permission.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'nationalId', 'email', 'phone', 'address', 'emergencyContactName', 'emergencyContactPhone', 'hireDate', 'designation','department','manager','employeeStatus','salary','payFrequency','payRate','healthInsurance','retirementPlans','otherBenefits','performanceReviews','trainingRecords','trainingRecords','certifications','terminationDate','reasonForTermination','team', 'actions'];
  dataSource: Employee[] = [];

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('employee').then((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "employee").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/employee-form']);
  }



  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }

  

}
