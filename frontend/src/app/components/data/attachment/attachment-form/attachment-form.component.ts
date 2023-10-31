import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Attachment } from '../../../../model/data/attachment.model';
import { DataService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';

@Component({
  selector: 'app-attachment-form',
  templateUrl: './attachment-form.component.html',
  styleUrls: ['./attachment-form.component.scss']
})
export class AttachmentFormComponent  implements OnInit {
  attachmentForm!: FormGroup;
  controls: any = {
    "filePath": new FormControl('', []),
    "fileName": new FormControl('', []),


  };
  submitted = false;
  endPoint = "attachment";
  data: any = {}

  constructor(private formBuilder: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.attachmentForm.controls, this.data);
    }
  }

  createForm() {
    this.attachmentForm = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.attachmentForm.invalid) {
      return;
    }
    const attachmentData: Attachment = { ...this.attachmentForm.value };
    this.service.save(attachmentData, this.endPoint).subscribe(response => {
      this.attachmentForm.reset();
      this.submitted = false;
    });
  }
}
