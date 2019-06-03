import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditobservationslipComponent } from './editobservationslip.component';

describe('EditobservationslipComponent', () => {
  let component: EditobservationslipComponent;
  let fixture: ComponentFixture<EditobservationslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditobservationslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditobservationslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
