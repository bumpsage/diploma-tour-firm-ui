import {ResortArea} from './resort-area';
import {Apartment} from './apartment';

export enum BuildingEnum {
  HOTEL, VILLA, COTTAGE
}

export class LiveBuilding {

  public id: number;
  public resortArea: ResortArea;
  public apartments: Array<Apartment>;
  public images: Array<string>;
  public type: BuildingEnum;
  public number: string;
  public address: string;
  public name: string;
  public availableApartmentCount: number;
  public ifPoolExist: boolean;
  public ifParkingExist: boolean;
  public distanceToBeach: number;

  constructor() {
    this.id = null;
    this.resortArea = null;
    this.apartments = new Array<Apartment>();
    this.images = new Array<string>();
    this.type = null;
    this.number = '';
    this.address = '';
    this.name = '';
    this.availableApartmentCount = null;
    this.ifPoolExist = null;
    this.ifParkingExist = null;
    this.distanceToBeach = null;
  }

  public static update(currentLiveBuilding: LiveBuilding, liveBuilding: LiveBuilding) {
    currentLiveBuilding.resortArea = liveBuilding.resortArea;

    currentLiveBuilding.apartments = liveBuilding.apartments;
    if (currentLiveBuilding.apartments !== undefined && currentLiveBuilding.apartments !== null)
      currentLiveBuilding.apartments.sort((b, a) => b.id - a.id);

    currentLiveBuilding.images = liveBuilding.images;
    currentLiveBuilding.type = liveBuilding.type;
    currentLiveBuilding.number = liveBuilding.number;
    currentLiveBuilding.address = liveBuilding.address;
    currentLiveBuilding.name = liveBuilding.name;
    currentLiveBuilding.availableApartmentCount = liveBuilding.availableApartmentCount;
    currentLiveBuilding.ifPoolExist = liveBuilding.ifPoolExist;
    currentLiveBuilding.ifParkingExist = liveBuilding.ifParkingExist;
    currentLiveBuilding.distanceToBeach = liveBuilding.distanceToBeach;
  }
}
