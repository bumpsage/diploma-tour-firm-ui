import {Component, OnInit} from '@angular/core';
import {LiveBuildingService} from './services/live-building.service';
import {CountryService} from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TourFirmUi';

  constructor(private liveBuildingService: LiveBuildingService, private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.loadCountriesToSearchline();
    this.liveBuildingService.loadBuildingsOnStartPage();
  }
}
