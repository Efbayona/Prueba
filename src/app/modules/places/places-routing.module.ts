import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlacesComponent} from "@app/modules/places/pages/places/places.component";
import {PlacesDetailComponent} from "@app/modules/places/pages/places-detail/places-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PlacesComponent
  },
  {
    path: ':id',
    component: PlacesDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {
}
