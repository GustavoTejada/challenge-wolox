import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechsRoutingModule } from './techs-routing.module';
import { CollectionComponent } from './pages/collection/collection.component';


@NgModule({
  declarations: [
    CollectionComponent
  ],
  imports: [
    CommonModule,
    TechsRoutingModule
  ]
})
export class TechsModule { }
