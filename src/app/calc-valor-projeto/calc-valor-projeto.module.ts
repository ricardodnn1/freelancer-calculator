import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalcValorProjetoPage } from './calc-valor-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: CalcValorProjetoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalcValorProjetoPage]
})
export class CalcValorProjetoPageModule {}
