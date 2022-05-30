import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './main-components/toolbar/toolbar.component';
import { SearchlineComponent } from './main-components/searchline/searchline.component';
import { BuildingTypeSearchComponent } from './main-components/building-type-search/building-type-search.component';
import {ApartmentService} from './services/apartment.service';
import {LiveBuildingService} from './services/live-building.service';
import {CountryService} from './services/country.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import { ResultViewComponent } from './main-components/result-view/result-view.component';
import {MatCardModule} from '@angular/material/card';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CardFormViewComponent } from './main-components/card-form-view/card-form-view.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {appRoutes} from './app.routes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailCardModalComponent } from './main-components/detail-card-modal/detail-card-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchlineComponent,
    BuildingTypeSearchComponent,
    ResultViewComponent,
    CardFormViewComponent,
    DetailCardModalComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    MatCardModule,
    RatingModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ApartmentService,
    LiveBuildingService,
    CountryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
