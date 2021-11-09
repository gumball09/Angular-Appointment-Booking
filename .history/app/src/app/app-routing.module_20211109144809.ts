import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// define routes & associated component
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'appointment-list',
    componen
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }