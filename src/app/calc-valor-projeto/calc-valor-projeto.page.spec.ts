import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcValorProjetoPage } from './calc-valor-projeto.page';

describe('CalcValorProjetoPage', () => {
  let component: CalcValorProjetoPage;
  let fixture: ComponentFixture<CalcValorProjetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcValorProjetoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcValorProjetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
