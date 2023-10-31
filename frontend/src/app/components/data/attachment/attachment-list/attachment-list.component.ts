import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { Permission } from '../../../../model/auth/permission.model';
import { Attachment } from '../../../../model/data/attachment.model';
import { DataService } from '../../../../services/crud.service';

@Component({
  selector: 'app-attachment-list',
  templateUrl: './attachment-list.component.html',
  styleUrls: ['./attachment-list.component.scss']
})
export class AttachmentListComponent implements OnInit {

  displayedColumns: string[] = [
    'fileName',
    'filePath',
    'actions'];
  dataSource: Attachment[] = [];

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('attachment').then((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "attachment").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/attachment-form']);
  }



  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }



}
