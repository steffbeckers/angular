import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JonasRoutingModule } from './jonas-routing.module';
import { JonasComponent } from './jonas.component';


@NgModule({
  declarations: [JonasComponent],
  imports: [
    CommonModule,
    JonasRoutingModule
  ]
})
export class JonasModule { }
