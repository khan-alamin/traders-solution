import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../model/auth/role';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Permission } from 'src/app/model/auth/permission';
import { Page } from '../../../../dto/page.dto';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'permissions', 'actions'];
  dataSource: Role[] = [];

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('customer').then((res: Page) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "role").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/']);
  }

  getPermissionAsList(permissions: Permission[]): string {
    return permissions.map((p: Permission) => p.name).join(", ");
  }

}
