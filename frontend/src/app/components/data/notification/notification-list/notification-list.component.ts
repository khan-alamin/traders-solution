import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { DataService } from '../../../../services/crud.service';
import { Permission } from '../../../../model/auth/permission.model';
import { Notification } from '../../../../model/data/notification.model';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  displayedColumns: string[] = [
    'recipient',
    'message',
    'notificationType',
    'timestamp',
    'status',
    'linkURL',
    'associatedEntity',
    'senderUserID',
    'priorityLevel',
    'readTimestamp',
    'expirationDate',
    'additionalMetadata',
    'actions'];
  dataSource: Notification[] = [];

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('notification').then((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "notification").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/notification-form']);
  }



  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }



}
