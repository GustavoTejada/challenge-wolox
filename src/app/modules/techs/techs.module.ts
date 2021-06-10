import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechsRoutingModule } from './techs-routing.module';
import { CollectionComponent } from './pages/collection/collection.component';
import { CoreModule } from '../../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CollectionComponent
  ],
  imports: [
    CommonModule,
    TechsRoutingModule,
    CoreModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class TechsModule { }
