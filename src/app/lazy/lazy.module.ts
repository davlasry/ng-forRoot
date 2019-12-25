import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy/lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { CoreModule } from '../core/core.module';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    CoreModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
