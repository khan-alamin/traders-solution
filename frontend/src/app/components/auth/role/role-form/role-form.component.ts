import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Role } from '../../../../model/auth/role.model';
import { DataService } from '../../../../services/crud.service';
import { Permission } from '../../../../model/auth/permission.model';

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

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

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
    const permissions: Permission[] = this.roleForm.value.permissions
      .split(" */ *")
      .map((p: string) => {
        return { name: p, componentKey: p.toUpperCase() };
      });
    const roleData: Role = { ...this.roleForm.value, permissions: permissions };
    this.service.save(roleData, this.endPoint).subscribe(response => {
      this.roleForm.reset();
      this.submitted = false;
    });
  }
}
