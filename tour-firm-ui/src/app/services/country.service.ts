import {ReferenceService} from './reference.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApartmentEdit} from '../model/edit/apartment-edit';
import {CountryEdit} from '../model/edit/country-edit';
import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Country} from '../model/country';

const localUrl = ReferenceService.API_URL + '/country';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient, private router: Router) {}

  countryEmitter: EventEmitter<any> = new EventEmitter<any>();

  countryList: Country [] = [];

  public loadCountriesToSearchline() {
    this.loadAll()
      .subscribe((data: []) => {
        this.countryList = data;
        console.log(this.countryList);

        this.countryEmitter.emit(true);
      })
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

  public create(countryEdit: CountryEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', countryEdit, { headers: headers, responseType: 'json' });
  }

  public save(countryEdit: CountryEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', countryEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

}
