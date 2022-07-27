import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'calc-valor-hora', loadChildren: './calc-valor-hora/calc-valor-hora.module#CalcValorHoraPageModule' },
  { path: 'calc-valor-projeto', loadChildren: './calc-valor-projeto/calc-valor-projeto.module#CalcValorProjetoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
