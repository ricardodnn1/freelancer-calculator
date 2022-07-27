import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalcValorHoraPage } from './calc-valor-hora.page';

const routes: Routes = [
  {
    path: '',
    component: CalcValorHoraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalcValorHoraPage]
})
export class CalcValorHoraPageModule {}
