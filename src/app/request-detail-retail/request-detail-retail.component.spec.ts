import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailRetailComponent } from './request-detail-retail.component';

describe('RequestDetailRetailComponent', () => {
  let component: RequestDetailRetailComponent;
  let fixture: ComponentFixture<RequestDetailRetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailRetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
