import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandingComponent } from './pages/landing/landing.component';
import { CoreModule } from '../../core/core.module';
import { HeroComponent } from './components/hero/hero.component';
import { WoloxersComponent } from './components/woloxers/woloxers.component';
import { BenefitsComponent } from './components/benefits/benefits.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeroComponent,
    WoloxersComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    FontAwesomeModule,
  ]
})
export class HomeModule { }
