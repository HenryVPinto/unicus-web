import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailRequestsComponent } from './retail-requests.component';

describe('RetailRequestsComponent', () => {
  let component: RetailRequestsComponent;
  let fixture: ComponentFixture<RetailRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
