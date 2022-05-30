import {Country} from '../country';
import {ResortArea} from '../resort-area';
import {EntranceType} from '../types/entrance-type';
import {TravelingType} from '../types/traveling-type';
import {ResortCity} from '../resort-city';

export class ResortCityEdit {

  public id: number;
  public name: string;
  public countryId: number;
  //  public areaIds: number [];
  public isAbleForEntering: boolean;
  public enterTypeIds: number [];
  public travelingTypeIds: number [];

  constructor() {
    this.id = null;
    this.name = '';
    this.countryId = null;
    //  this.areaIds = [];
    this.isAbleForEntering = null;
    this.enterTypeIds = [];
    this.travelingTypeIds = [];
  }

  public update(resortCity: ResortCity) {
    this.id = resortCity.id;
    this.name = resortCity.name;

    if (resortCity.country)
      this.countryId = resortCity.country.id;

    // if (resortCity.areas)
    //   resortCity.areas.forEach(value => this.areaIds.push(value.id));

    this.isAbleForEntering = resortCity.isAbleForEntering;

    if (resortCity.enterTypes)
      resortCity.enterTypes.forEach(value => this.enterTypeIds.push(value.id));

    if (resortCity.travelingTypes)
      resortCity.travelingTypes.forEach(value => this.travelingTypeIds.push(value.id));
  }
}
