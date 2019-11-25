import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAllComponent } from './angular-all.component';

describe('AngularAllComponent', () => {
  let component: AngularAllComponent;
  let fixture: ComponentFixture<AngularAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
