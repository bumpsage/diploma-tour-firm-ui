import { Component, OnInit } from '@angular/core';
import {LiveBuilding} from '../../model/live-building';
import {LiveBuildingService} from '../../services/live-building.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  liveBuildingList: LiveBuilding [] = [];
  isFiltered: boolean = false;

  // Inject DataService
  constructor(private liveBuildingService: LiveBuildingService) {

    this.liveBuildingService.liveBuildingFindEmitter
      .subscribe( (data: any) => {
        this.liveBuildingList = this.liveBuildingService.foundLiveBuildingList;
        this.isFiltered = this.liveBuildingService.isFiltered;
      });

  }

  //  Беру массив с ДатаСервиса
  ngOnInit(): void {
    this.liveBuildingList = this.liveBuildingService.foundLiveBuildingList;
    this.isFiltered = this.liveBuildingService.isFiltered;
  }


}
