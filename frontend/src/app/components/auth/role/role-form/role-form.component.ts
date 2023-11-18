import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Role } from '../../../../model/auth/role.model';
import { DataService } from '../../../../services/crud.service';
import { Permission } from '../../../../model/auth/permission.model';
import { Router } from '@angular/router';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {
  roleForm!: FormGroup;
  controls: any = {
    "name": new FormControl('', []),
    "permission": new FormControl('', []),
  };
  submitted = false;
  endPoint = "role";
  constructor(private formBuilder: FormBuilder, private service: DataService,private router:Router) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.roleForm = this.formBuilder.group({
      name: ['', Validators.required],
      permissions: ['',Validators.required]
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.roleForm.invalid) {
      return;
    }
    const permissions: Permission[] = [{ id:Number(this.roleForm.value.permissions ) }];
    const roleData: Role = { ...this.roleForm.value, permissions: permissions };
    this.service.save(roleData, this.endPoint).subscribe(response => {
      this.roleForm.reset();
      this.submitted = false;
      this.router.navigate(['/role-list']);
    });
  }
}
