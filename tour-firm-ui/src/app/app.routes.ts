import {Routes} from '@angular/router';
import {BuildingTypeSearchComponent} from './main-components/building-type-search/building-type-search.component';
import {SearchlineComponent} from './main-components/searchline/searchline.component';
import {ToolbarComponent} from './main-components/toolbar/toolbar.component';
import {CardFormViewComponent} from './main-components/card-form-view/card-form-view.component';
import {ResultViewComponent} from './main-components/result-view/result-view.component';
import {DetailCardModalComponent} from './main-components/detail-card-modal/detail-card-modal.component';

export const appRoutes: Routes = [

  //   Main components
  {path: 'content', component: BuildingTypeSearchComponent},
  {path: 'searchline', component: SearchlineComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'building-type-search', component: BuildingTypeSearchComponent},
  {path: 'card-form-view', component: CardFormViewComponent},
  {path: 'result-view', component: ResultViewComponent},
  {path: 'detail-card-modal', component: DetailCardModalComponent},


  //   Start loading
  { path: '', redirectTo: '/building-type-search', pathMatch: 'full' }
];


