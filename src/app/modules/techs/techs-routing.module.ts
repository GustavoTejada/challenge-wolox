import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './pages/collection/collection.component';

const routes: Routes = [
  {
    path:"collection",
    canActivate: [],
    component: CollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechsRoutingModule { }
