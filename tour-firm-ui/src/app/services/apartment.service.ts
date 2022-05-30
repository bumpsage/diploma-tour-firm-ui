import {EventEmitter, Injectable} from '@angular/core';
import {ReferenceService} from './reference.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApartmentEdit} from '../model/edit/apartment-edit';
import {Apartment} from '../model/apartment';
import {Data} from '@angular/router';

const localUrl = ReferenceService.API_URL + '/apartment';
const localUrlForApartmentOrder = ReferenceService.API_URL + '/reservedapartment';

@Injectable()
export class ApartmentService {

  apartmentOrderEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) {
  }

  public orderApartment(apartment: Apartment, dataArray: Data[]) {
    this.order(apartment, dataArray)
      .subscribe((data: any) => {
          // event
          this.apartmentOrderEmitter.emit(data);
          console.log('Order Apartment success');
        },
        error => {
          console.log('Order Apartment error');
        }
      );
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

  public create(apartmentEdit: ApartmentEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', apartmentEdit, { headers: headers, responseType: 'json' });
  }

  public save(apartmentEdit: ApartmentEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', apartmentEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

  private order(apartment: Apartment, dataArray: Data[]) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify({
      'id': null, 'apartmentId': apartment.id, 'dateIn': dataArray[0], 'dateOut': dataArray[1]
    });

    return this.http.post(localUrlForApartmentOrder + '/add', body, { headers: headers, responseType: 'json' });
  }

}
