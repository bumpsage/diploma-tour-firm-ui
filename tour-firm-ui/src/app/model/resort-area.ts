import {ResortCity} from './resort-city';
import {LiveBuilding} from './live-building';

export class ResortArea {

  public id: number;
  public city: ResortCity;
  public buildings: Array<LiveBuilding>;
  public name: string;

  constructor() {
    this.id = null;
    this.city = null;
    this.buildings = new Array<LiveBuilding>();
    this.name = '';
  }

  public static update(currentArea: ResortArea, area: ResortArea) {
    currentArea.city = area.city;

    currentArea.buildings = area.buildings;
    if (currentArea.buildings !== undefined && currentArea.buildings !== null)
      currentArea.buildings.sort((b, a) => b.id - a.id);

    currentArea.name = area.name;
  }
}
