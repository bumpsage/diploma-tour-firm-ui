import {Apartment} from '../apartment';

export class ApartmentEdit {

  public id: number;
  public buildingId: number;
  public number: string;
  public price: number;
  public amountOfBeds: number;
  public amountOfRooms: number;
  public ifBathroomExist: boolean;

  constructor() {
    this.id = null;
    this.buildingId = null;
    this.number = '';
    this.price = null;
    this.amountOfBeds = null;
    this.amountOfRooms = null;
    this.ifBathroomExist = null;
  }

  public update(apartment: Apartment) {
    this.id = apartment.id;

    if (apartment.building)
      this.buildingId = apartment.building.id;

    this.number = apartment.number;
    this.price = apartment.price;
    this.amountOfBeds = apartment.amountOfBeds;
    this.amountOfRooms = apartment.amountOfRooms;
    this.ifBathroomExist = apartment.ifBathroomExist;
  }
}
