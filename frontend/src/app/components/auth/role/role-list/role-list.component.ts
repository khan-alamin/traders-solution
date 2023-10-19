import { Component } from '@angular/core';
import { Role } from '../../../../model/auth/role';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent {

  displayedColumns: string[] = ['name',  'permissions', 'actions'];
  dataSource: Role[] = [];

  constructor(private service: DataService, private router: Router) { }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id,"role").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/']);
  }

}
