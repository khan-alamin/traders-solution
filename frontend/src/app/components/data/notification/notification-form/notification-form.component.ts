import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/crud.service';
import { populateFormControl } from 'src/app/utils/object.util';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.scss']
})
export class NotificationFormComponent implements OnInit {
  notificationForm!: FormGroup;
  controls: any = {
    "recipient": new FormControl('', []),
    "message": new FormControl('', []),
    "notificationType": new FormControl('', []),
    "timestamp": new FormControl('', []),
    "status": new FormControl('', []),
    "linkURL": new FormControl('', []),
    "associatedEntity": new FormControl('', []),
    "senderUserID": new FormControl('', []),
    "priorityLevel": new FormControl('', []),
    "readTimestamp": new FormControl('', []),
    "expirationDate": new FormControl('', []),
    "additionalMetadata": new FormControl('', [])

  };
  submitted = false;
  endPoint = "notification";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.notificationForm.controls, this.data);
    }
  }

  createForm() {
    this.notificationForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.notificationForm.invalid) {
      return;
    }
    const notificationData: Notification = { ...this.notificationForm.value };
    this.service.save(notificationData, this.endPoint).subscribe(response => {
      this.notificationForm.reset();
      this.submitted = false;
    });
  }
}

