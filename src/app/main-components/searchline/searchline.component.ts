import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {CountryService} from '../../services/country.service';
import {LiveBuildingService} from '../../services/live-building.service';
import {Subscription} from 'rxjs';
import {Country} from '../../model/country';

@Component({
  selector: 'app-searchline',
  templateUrl: './searchline.component.html',
  styleUrls: ['./searchline.component.css']
})
export class SearchlineComponent implements OnInit, OnDestroy {

  private countrySubscription: Subscription[] = [];

  countrySelected: string = '';
  citySelected: string = '';

  countryNames: string [] = [];
  cityNames: string [] = [];
  bsRangeValue: Date [] = [];

  // dateSelected: string;
  apartmentCountSelected: number = 1;

  loading: boolean = false;

  constructor(private countryService: CountryService, private liveBuildingService: LiveBuildingService) {

    this.countrySubscription.push(this.countryService.countryEmitter
      .subscribe(value =>
        this.countryService.countryList.forEach(country => this.countryNames.push(country.name))
      )
    );

    this.countrySubscription.push(this.liveBuildingService.liveBuildingFindEmitter
      .subscribe(value =>
        this.loading = false
      )
    );

  }

  buttonOnClick() {
    this.liveBuildingService.find(this.countrySelected, this.citySelected, this.bsRangeValue);
    this.loading = true;
  }

  setCityNames() {
    this.cityNames = [];
    let countries: Country [] = this.countryService.countryList.filter(country => country.name === this.countrySelected);
    // countries[0].cities.forEach(city => this.cityNames.push(city.name));
    for (let country of countries) {
      country.cities.forEach(city => this.cityNames.push(city.name));
    }

    return this.cityNames;
  }

  ngOnInit(): void {
    this.setCityNames();
  }

  ngOnDestroy(): void {
    this.countrySubscription.forEach(value => value.unsubscribe());
  }

  checkEnteredValues(): boolean {
    return !(this.bsRangeValue.length > 0 && this.countrySelected !== '' && this.citySelected !== '');
  }

}
