import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Team } from '../../../../model/config/team.model';
import { DataService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  teamForm!: FormGroup;
  controls: any = {
    "name": new FormControl('', []),
    "leader": new FormControl('', []),
    "members": new FormControl('', []),
    
  };
  submitted = false;
  endPoint = "team";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {      
      populateFormControl(this.teamForm.controls, this.data);
    }
  }

  createForm() {
    this.teamForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.teamForm.invalid) {
      return;
    }
    const teamData: Team = { ...this.teamForm.value };
    this.service.save(teamData, this.endPoint).subscribe(response => {
      this.teamForm.reset();
      this.submitted = false;
    });
  }
}