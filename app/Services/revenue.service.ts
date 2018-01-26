import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RevenueData, Revenue } from '../revenue-data';
import { Profile } from '../profile-data';

@Injectable()
export class RevenueService {
    private addRevenueUrl = 'http://54.193.48.195:8000/rest/db/revitem/add'
    private allRevenueUrl = 'http://54.193.48.195:8000/rest/db/revitem/getall'
    private addProfileUrl = 'http://54.193.48.195:8000/rest/db/revitem/profiles/add?revitemid='

  profile: Observable<Profile[]>
  revitemid : number
  name: string
  mda: string
  ipsacode: string
  amount: number
  revenuedata: RevenueData

  constructor( private http: HttpClient) { }


       
  addRevItem(revenuedata:RevenueData) {
    let header = this.addRevenueUrl
    let body = JSON.parse(JSON.stringify({"name":revenuedata.name, "mda":revenuedata.mda, "ipsacode":revenuedata.ipsacode, "amount":revenuedata.amount }))
    const req = this.http.post<Revenue>(header,body)
    .subscribe(res => {this.revitemid = res.id; this.name = res.name; this.mda = res.mda; this.ipsacode = res.ipsacode; this.amount = res.amount; console.log(res)})
   
  }

  getRevItem(): Observable<Revenue[]>{
    return this.http.get<Revenue[]>(this.allRevenueUrl)
       
  }


  addProfile(profile:any){
    let header = this.addProfileUrl + this.revitemid
    let body = JSON.parse(JSON.stringify(profile))
    const req = this.http.post(header,body)
    .subscribe(res => {console.log(res); }
    );
  }

  
  }