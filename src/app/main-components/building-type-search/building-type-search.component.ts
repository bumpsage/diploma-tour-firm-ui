import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {BuildingEnum, LiveBuilding} from '../../model/live-building';
import {LiveBuildingService} from '../../services/live-building.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-building-type-search',
  templateUrl: './building-type-search.component.html',
  styleUrls: ['./building-type-search.component.css']
})
export class BuildingTypeSearchComponent implements OnInit, OnDestroy {

  private liveBuildingSubscription: Subscription;

  liveBuildingList: LiveBuilding [] = [];

  hotels: number = 0;
  cottages: number = 0;
  villas: number = 0;

  constructor(private liveBuildingService: LiveBuildingService) {

    // subscribe
    this.liveBuildingSubscription = this.liveBuildingService.liveBuildingEmitter
      .subscribe(value => {
        this.liveBuildingList = [];
        this.liveBuildingService.liveBuildingList.forEach(liveBuilding => this.liveBuildingList.push(liveBuilding));
        this.countBuildings();
      });

  }

  countBuildings() {
    for (let liveBuilding of this.liveBuildingList) {
      if (liveBuilding.type.toString() == BuildingEnum[BuildingEnum.HOTEL].toString()) {
        this.hotels++;
      } else if (liveBuilding.type.toString() == BuildingEnum[BuildingEnum.COTTAGE].toString()) {
        this.cottages++;
      } else {
        this.villas++;
      }
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.liveBuildingSubscription) {
      this.liveBuildingSubscription.unsubscribe();
      this.liveBuildingSubscription = null;
    }
  }
}
