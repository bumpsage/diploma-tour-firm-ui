import {Component, Input, OnInit} from '@angular/core';
import {LiveBuildingService} from '../../services/live-building.service';
import {LiveBuilding} from '../../model/live-building';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {DetailCardModalComponent} from '../detail-card-modal/detail-card-modal.component';
import {Data} from '@angular/router';

const path: string = "assets/images/carousel/";

@Component({
  selector: 'app-card-form-view',
  templateUrl: './card-form-view.component.html',
  styleUrls: ['./card-form-view.component.css']
})
export class CardFormViewComponent implements OnInit {

  constructor(private modalService: BsModalService, private liveBuildingService: LiveBuildingService) { }

  bsModalRef: BsModalRef;
  @Input() liveBuilding: LiveBuilding;

  /*Rating*/
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;

  firstPhoto: string;

  ngOnInit(): void {
    this.firstPhoto = path + this.liveBuilding.images[0];
  }


  openModalWithComponent() {
    const initialState = {
      liveBuilding: this.liveBuilding,
      dataArray: this.liveBuildingService.dataArray
    };

    this.bsModalRef = this.modalService.show(DetailCardModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Back';
  }

}
