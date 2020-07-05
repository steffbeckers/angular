import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonasComponent } from './jonas.component';

const routes: Routes = [{ path: '', component: JonasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonasRoutingModule {}
