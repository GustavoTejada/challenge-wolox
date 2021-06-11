import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandingComponent } from './pages/landing/landing.component';
import { CoreModule } from '../../core/core.module';
import { HeroComponent } from './components/hero/hero.component';
import { WoloxersComponent } from './components/woloxers/woloxers.component';
import { BenefitsComponent } from './components/benefits/benefits.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
