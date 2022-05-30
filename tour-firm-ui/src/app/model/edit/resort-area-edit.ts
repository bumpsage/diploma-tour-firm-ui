import {ResortCity} from '../resort-city';
import {LiveBuilding} from '../live-building';
import {ResortArea} from '../resort-area';

export class ResortAreaEdit {

  public id: number;
  public cityId: number;
  //  public buildingIds: number [];
  public name: string;

  constructor() {
    this.id = null;
    this.cityId = null;
    //  this.buildingIds = [];
    this.name = '';
  }

  public update(resortArea: ResortArea) {
    this.id = resortArea.id;

    if (resortArea.city)
      this.cityId = resortArea.city.id;

    // if (resortArea.buildings)
    //   resortArea.buildings.forEach(value => this.buildingIds.push(value.id));

    this.name = resortArea.name;
  }
}
