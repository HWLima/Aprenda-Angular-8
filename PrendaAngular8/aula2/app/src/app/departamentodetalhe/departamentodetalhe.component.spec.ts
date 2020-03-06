import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentodetalheComponent } from './departamentodetalhe.component';

describe('DepartamentodetalheComponent', () => {
  let component: DepartamentodetalheComponent;
  let fixture: ComponentFixture<DepartamentodetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentodetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentodetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
