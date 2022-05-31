import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {LiveBuilding} from '../../model/live-building';
import {Apartment} from '../../model/apartment';
import {Data} from '@angular/router';
import {ApartmentService} from '../../services/apartment.service';
import {LiveBuildingService} from '../../services/live-building.service';

export const path: string = 'assets/images/carousel/';

@Component({
  selector: 'app-detail-card-modal',
  templateUrl: './detail-card-modal.component.html',
  styleUrls: ['./detail-card-modal.component.css']
})
export class DetailCardModalComponent implements OnInit {

  /*   Table   */
  liveBuilding: LiveBuilding;
  dataArray: Data[];

  /*   Carousel   */
  myInterval: number = 6000;
  activeSlideIndex: number = 0;

  slides = [];

  constructor(public bsModalRef: BsModalRef, private apartmentService: ApartmentService, private liveBuildingService: LiveBuildingService) {

    this.apartmentService.apartmentOrderEmitter
      .subscribe((data: any) => {
        let orderId: number = data['id'];
        let apartment: Apartment = data['apartment'];
        console.log('Order id [' + orderId + '], apartment id [' + apartment.id + '] is reserved');
        let apartmentToChange: Apartment[] = this.liveBuilding.apartments.filter(value => value.id === apartment.id);
        apartmentToChange[0].isOrdered = true;
      });

  }

  ngOnInit(): void {
    for (let image of this.liveBuilding.images) {
      this.slides.push({image: path + image})
    }
  }

  orderApartment(apartment: Apartment): void {
    this.apartmentService.orderApartment(apartment, this.dataArray);
  }

}
