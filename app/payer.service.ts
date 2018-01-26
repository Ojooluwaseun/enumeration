import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Payer, PayerData } from './payer-data';

@Injectable()
export class PayerService {
  payerdata = new PayerData;
  private getPayerUrl = 'http://54.193.48.195:8000/rest/db/payer/';
  private serviceUrl = 'http://54.193.48.195:8000/rest/db/payer/getall';
  private postUrl = 'http://54.193.48.195:8000/rest/db/payer/add';

  constructor( private http: HttpClient) { }

  getPayer(): Observable<Payer[]> {
    return this.http.get<Payer[]>(this.serviceUrl);
  }

  getPayerByTin(tin: any): void{
    this.http.get<Payer>(this.getPayerUrl + tin).subscribe(data => {
      console.log(data); });
  }

  addPayer() {
    this.http.post(this.postUrl, this.payerdata)
    .subscribe(res => {console.log(res); }, err => {console.log('Error Occured'); }
    );
  }


}
