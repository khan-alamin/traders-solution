import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Role } from '../../../../model/auth/role';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {
  roleForm!: FormGroup;
  submitted = false;
  endPoint = "role";

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.roleForm = this.formBuilder.group({
      name: ['', Validators.required],
      permissions: ['']
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.roleForm.invalid) {
      return;
    }
    const roleData: Role = this.roleForm.value;
    this.service.save(roleData,this.endPoint ).subscribe(response => {
      this.roleForm.reset();
      this.submitted = false;
    });
  }
}
