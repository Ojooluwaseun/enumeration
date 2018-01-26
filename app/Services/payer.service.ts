import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, } from '@angular/common/http';
import {Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Payer, PayerData } from '../payer-data';
import "rxjs/Rx";
import { SpinnerService } from '../spinner.service';

@Injectable()
export class PayerService {
  private serviceUrl = 'http://54.193.48.195:8000/rest/db/payer/getall';
  private postUrl = 'http://54.193.48.195:8000/rest/db/payer/add';

  constructor( private http: HttpClient, public spinner: SpinnerService) { }
  firstname: string;
  middlename: string;
  surname: string;
  tin: string;
  phone: string;
  email: string;
  gender: string;
  dob: string;
  maritalstatus: string;
  occupation: string;
  stateoforigin: string;
  lgaoforigin: string;


  getPayer(): Observable<Payer[]> { 
    return this.http.get<Payer[]>(this.serviceUrl)
  }

  getPayerbyTin(tin:string) {
    const req = this.http.get<Payer>('http://54.193.48.195:8000/rest/db/payer/' + tin)
    .subscribe(res => {this.firstname = res.firstname; this.middlename = res.middlename; this.surname = res.surname });
  }

 


  addPayer(payerdata:PayerData) {
    let header = this.postUrl
    let body = JSON.parse(JSON.stringify({"firstname": payerdata.firstname,"surname": payerdata.surname,"middlename":payerdata.middlename,"othername": payerdata.othername,"maritalstatus": payerdata.maritalstatus,
    "dob": payerdata.dob,"nationality": payerdata.nationality,"state": payerdata.state,"lga": payerdata.lga,"gender": payerdata.gender,"office_address": payerdata.office_address,"jtbtin": payerdata.jtbtin,"lgaoforigin": payerdata.lgaoforigin, 
    "stateoforigin": payerdata.stateoforigin,"taxpayercompany": payerdata.taxpayercompany,"occupation": payerdata.occupation,"employstatus": payerdata.employstatus,"email": payerdata.email,"phone":payerdata.phone,
    "address":{"houseNo": payerdata.houseNo,"plotNo": payerdata.plotNo, "blockNo": payerdata.blockNo,"flatNo": payerdata.flatNo,"streetName": payerdata.streetName,"districtName": payerdata.districtName}
    }))
    const req = this.http.post<Payer>(header,body)
    .subscribe(res => {this.firstname = res.firstname; 
                      this.middlename = res.middlename; 
                      this.surname = res.surname; 
                      this.tin = res.tin; 
                      this.phone = res.phone;
                      this.email = res.email;
                      this.gender = res.gender;
                      this.dob = res.dob;
                      this.maritalstatus = res.maritalstatus;
                      this.occupation = res.occupation;
                      this.stateoforigin = res.stateoforigin;
                      this.lgaoforigin = res.lgaoforigin;
                      console.log(res)
                      })
  }
}