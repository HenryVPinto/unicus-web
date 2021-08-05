import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnStationsComponent } from './own-stations.component';

describe('OwnStationsComponent', () => {
  let component: OwnStationsComponent;
  let fixture: ComponentFixture<OwnStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
