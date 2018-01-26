import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BusinessData } from '../business-data';
import { Asset } from '../asset-data';
import { Profile } from '../profile-data';

@Injectable()
export class BusinessService {

  private postUrl = 'http://54.193.48.195:8000/rest/db/asset/business/add?owner=';
  private getAssetUrl = 'http://54.193.48.195:8000/rest/db/asset/type/BUSINESS'
  private profileUrl = 'http://54.193.48.195:8000/rest/db/profile/getbytype/BUSINESS';
  private addProfileUrl = 'http://54.193.48.195:8000/rest/db/asset/profile/add?assetid='

  constructor( private http: HttpClient) { }
  assetid : number
  ownerid: string
  lga : string
  ward : string

   getAssetByType() {
    const req =  this.http.get<Asset[]>(this.getAssetUrl)
    .subscribe( res => {console.log(res)});
  }

  getProfile(){
    return this.http.get<Profile[]>(this.profileUrl)
      
  }

  addBusiness(businessdata:BusinessData) {
    let header = this.postUrl + businessdata.ownerid
    let body = JSON.parse(JSON.stringify({"ownerid":businessdata.ownerid, "lga":businessdata.lga, "ward":businessdata.ward, "town":businessdata.ward,"category":businessdata.category, "operation": businessdata.operation, "sector": businessdata.sector, "structure":businessdata.structure, "subsector":businessdata.subsector, "business_type": businessdata.business_type, "business_name": businessdata.business_name, "value":businessdata.value, "location":{"latitude":businessdata.latitude, "longitude":businessdata.longitude}, "registered_date": businessdata.reg_date, "address":{"houseNo":businessdata.houseNo, "plotNo":businessdata.plotNo, "blockNo":businessdata.blockNo, "flatNo":businessdata.flatNo, "streetName":businessdata.streetName, "districtName":businessdata.districtName} }))
     const req = this.http.post<Asset>(header,body)
    .subscribe(res => {this.assetid = res.id; this.ownerid = res.ownerid; this.lga = res.lga; this.ward = res.ward; console.log (res)}
    );
  }


  addProfile(profile:any){
    let header = this.addProfileUrl + this.assetid
    let body = JSON.parse(JSON.stringify(profile))
    const req = this.http.post(header,body)
    .subscribe(res => {console.log(res); }
    );
  }


}