import {Country} from './country';
import {ResortArea} from './resort-area';
import {EntranceType} from './types/entrance-type';
import {TravelingType} from './types/traveling-type';

export class ResortCity {

  public id: number;
  public name: string;
  public country: Country;
  public areas: Array<ResortArea>;
  public isAbleForEntering: boolean;
  public enterTypes: Array<EntranceType>;
  public travelingTypes: Array<TravelingType>;

  constructor() {
    this.id = null;
    this.name = '';
    this.country = null;
    this.areas = new Array<ResortArea>();
    this.isAbleForEntering = null;
    this.enterTypes = new Array<EntranceType>();
    this.travelingTypes = new Array<TravelingType>();
  }

  public static update(currentCity: ResortCity, city: ResortCity) {
    currentCity.name = city.name;
    currentCity.country = city.country;

    currentCity.areas = city.areas;
    if (currentCity.areas !== undefined && currentCity.areas !== null)
      currentCity.areas.sort((b, a) => b.id - a.id);

    currentCity.isAbleForEntering = city.isAbleForEntering;

    currentCity.enterTypes = city.enterTypes;
    if (currentCity.enterTypes !== undefined && currentCity.enterTypes !== null)
      currentCity.enterTypes.sort((b, a) => b.id - a.id);

    currentCity.travelingTypes = city.travelingTypes;
    if (currentCity.travelingTypes !== undefined && currentCity.travelingTypes !== null)
      currentCity.travelingTypes.sort((b, a) => b.id - a.id);
  }
}
