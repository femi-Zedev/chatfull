import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FongbeComponent } from './fongbe.component';


const routes: Routes = [
  {
    path: '',
    component: FongbeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FongbePageRoutingModule {}
