import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcValorHoraPage } from './calc-valor-hora.page';

describe('CalcValorHoraPage', () => {
  let component: CalcValorHoraPage;
  let fixture: ComponentFixture<CalcValorHoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcValorHoraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcValorHoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
