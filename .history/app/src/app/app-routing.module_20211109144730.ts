import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// define routes
const routes: Routes = [
  {
    path: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }