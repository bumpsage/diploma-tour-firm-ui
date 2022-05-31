import {ResortArea} from '../resort-area';
import {Apartment} from '../apartment';
import {BuildingEnum, LiveBuilding} from '../live-building';

export class LiveBuildingEdit {

  public id: number;
  public resortAreaId: number;
  //  public apartmentIds: number [];
  public images: string [];
  public type: string;
  public number: string;
  public address: string;
  public name: string;
  public availableApartmentCount: number;
  public ifPoolExist: boolean;
  public ifParkingExist: boolean;
  public distanceToBeach: number;

  constructor() {
    this.id = null;
    this.resortAreaId = null;
    //  this.apartments = [];
    this.images = [];
    this.type = '';
    this.number = '';
    this.address = '';
    this.name = '';
    this.availableApartmentCount = null;
    this.ifPoolExist = null;
    this.ifParkingExist = null;
    this.distanceToBeach = null;
  }

  public update(liveBuilding: LiveBuilding) {
    this.id = liveBuilding.id;

    if (liveBuilding.resortArea)
      this.resortAreaId = liveBuilding.resortArea.id;

    // if (liveBuilding.apartments)
    //   liveBuilding.apartments.forEach(value => this.apartmentIds.push(value.id));

    this.images = liveBuilding.images;
    this.type = liveBuilding.type.toString();
    this.number = liveBuilding.number;
    this.address = liveBuilding.address;
    this.name = liveBuilding.name;
    this.availableApartmentCount = liveBuilding.availableApartmentCount;
    this.ifPoolExist = liveBuilding.ifPoolExist;
    this.ifParkingExist = liveBuilding.ifParkingExist;
    this.distanceToBeach = liveBuilding.distanceToBeach;
  }
}
