import {ResortCity} from './resort-city';
import {EntranceType} from './types/entrance-type';

export class Country {

  public id: number;
  public cities: Array<ResortCity>;
  public isAbleForEntering: boolean;
  public name: string;
  public enterTypes: Array<EntranceType>;

  constructor() {
    this.id = null;
    this.cities = new Array<ResortCity>();
    this.isAbleForEntering = null;
    this.name = '';
    this.enterTypes = new Array<EntranceType>();
  }

  public static update(currentCountry: Country, country: Country) {
    currentCountry.cities = country.cities;
    if (currentCountry.cities !== undefined && currentCountry.cities !== null)
      currentCountry.cities.sort((b, a) => b.id - a.id);

    currentCountry.isAbleForEntering = country.isAbleForEntering;
    currentCountry.name = country.name;

    currentCountry.enterTypes = country.enterTypes;
    if (currentCountry.enterTypes !== undefined && currentCountry.enterTypes !== null)
      currentCountry.enterTypes.sort((b, a) => b.id - a.id);
  }
}
