import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissionsComponent } from './add-missions.component';

describe('AddMissionsComponent', () => {
  let component: AddMissionsComponent;
  let fixture: ComponentFixture<AddMissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMissionsComponent]
    });
    fixture = TestBed.createComponent(AddMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
