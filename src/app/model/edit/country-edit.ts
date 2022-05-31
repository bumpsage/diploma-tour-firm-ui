import {EntranceType} from '../types/entrance-type';
import {ResortCity} from '../resort-city';
import {Country} from '../country';

export class CountryEdit {

  public id: number;
  //  public cityIds: number [];
  public isAbleForEntering: boolean;
  public name: string;
  public enterTypeIds: number [];

  constructor() {
    this.id = null;
    //  this.cities = [];
    this.isAbleForEntering = null;
    this.name = '';
    this.enterTypeIds = [];
  }

  public update(country: Country) {
    this.id = country.id;

    //  if (country.cityIds)
    //    country.cityIds.forEach(value => this.cityIds.push(value.Id));

    this.isAbleForEntering = country.isAbleForEntering;
    this.name = country.name;

    if (country.enterTypes)
      country.enterTypes.forEach(value => this.enterTypeIds.push(value.id));

  }
}
