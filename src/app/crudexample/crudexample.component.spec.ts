import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDExampleComponent } from './crudexample.component';

describe('CRUDExampleComponent', () => {
  let component: CRUDExampleComponent;
  let fixture: ComponentFixture<CRUDExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
