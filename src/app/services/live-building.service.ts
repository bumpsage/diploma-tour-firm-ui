import {ReferenceService} from './reference.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CountryEdit} from '../model/edit/country-edit';
import {LiveBuildingEdit} from '../model/edit/live-building-edit';
import {EventEmitter, Injectable} from '@angular/core';
import {Data, Router} from '@angular/router';
import {LiveBuilding} from '../model/live-building';

const localUrl = ReferenceService.API_URL + '/livebuilding';

@Injectable()
export class LiveBuildingService {

  constructor(private http: HttpClient, private router: Router) {
  }

  liveBuildingEmitter: EventEmitter<any> = new EventEmitter<any>();
  liveBuildingFindEmitter: EventEmitter<any> = new EventEmitter<any>();

  isFiltered: boolean = false;

  liveBuildingList: LiveBuilding [] = [];
  foundLiveBuildingList: LiveBuilding [] = [];
  dataArray: Data[] = [];

  public find(country: String, city: String, dataArray: Data[]) {
    this.filter(country, city, dataArray)
      .subscribe(
        (data: []) => {
          this.foundLiveBuildingList = data;
          this.dataArray = dataArray;
          this.router.navigate(['./result-view']);
          this.liveBuildingFindEmitter.emit(true);
          console.log(this.foundLiveBuildingList);
        },
        error => {},
        () => this.isFiltered = true);
  }

  public loadBuildingsOnStartPage() {
    this.loadAll()
      .subscribe((data: []) => {
        this.liveBuildingList = data;
        console.log(this.liveBuildingList);

        // event
        this.liveBuildingEmitter.emit(true)
      });
  }

  public loadAll() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list', { headers: headers, responseType: 'json' });
  }

  public loadById(id: number) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list/' + id, { headers: headers, responseType: 'json' });
  }

  public filter(country: String, city: String, dataArray: Data[]) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify({
      'country': country, 'city': city, 'dateIn': dataArray[0], 'dateOut': dataArray[1]
    });

    return this.http.post(localUrl + '/filter', body, { headers: headers, responseType: 'json' });
  }

  public create(liveBuildingEdit: LiveBuildingEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', liveBuildingEdit, { headers: headers, responseType: 'json' });
  }

  public save(liveBuildingEdit: LiveBuildingEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', liveBuildingEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

}
