import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionFormComponent } from './permission-form.component';

describe('PermissionFormComponent', () => {
  let component: PermissionFormComponent;
  let fixture: ComponentFixture<PermissionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionFormComponent]
    });
    fixture = TestBed.createComponent(PermissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
