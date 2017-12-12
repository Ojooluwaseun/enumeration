import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, } from '@angular/common/http';
import {Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Payer, PayerData } from '../payer-data';
import "rxjs/Rx";

@Injectable()
export class PayerService {
  private serviceUrl = 'http://54.193.48.195:8000/rest/db/payer/getall';
  private postUrl = 'http://54.193.48.195:8000/rest/db/payer/add';

  constructor( private http: HttpClient) { }

  getPayer(): Observable<Payer[]> {
    return this.http.get<Payer[]>(this.serviceUrl);
  }

  getPayerbyTin(tin:string): Observable<Payer[]> {
    return this.http.get<Payer[]>('http://54.193.48.195:8000/rest/db/payer/getall')
  }

 


  addPayer(payerdata:PayerData) {
    let header = this.postUrl
    let body = JSON.parse(JSON.stringify({"firstname": payerdata.firstname,"surname": payerdata.surname,"middlename":payerdata.middlename,"othername": payerdata.othername,"maritalstatus": payerdata.maritalstatus,
    "dob": payerdata.dob,"nationality": payerdata.nationality,"state": payerdata.state,"lga": payerdata.lga,"gender": payerdata.gender,"office_address": payerdata.office_address,"jtbtin": payerdata.jtbtin,"lgaoforigin": payerdata.lgaoforigin, 
    "stateoforigin": payerdata.stateoforigin,"taxpayercompany": payerdata.taxpayercompany,"occupation": payerdata.occupation,"employstatus": payerdata.employstatus,"email": payerdata.email,"phone":payerdata.phone,
    "address":{"house_no": payerdata.house_no,"plot_no": payerdata.plot_no, "block_no": payerdata.block_no,"flat_no": payerdata.flat_no,"street_name": payerdata.street_name,"district_name": payerdata.district_name}
    }))
    const req = this.http.post(header,body)
    .subscribe(res => {console.log(res); }
    );
  }
}