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

  constructor( private http: HttpClient) { }

   getAssetByType() {
    const req =  this.http.get<Asset[]>(this.getAssetUrl)
    .subscribe( res => {console.log(res)});
  }

  getProfile(){
    const req =  this.http.get<Profile[]>(this.profileUrl)
    .subscribe(res => {console.log(res)});
      
  }

  addBusiness(businessdata:BusinessData) {
    let header = this.postUrl + businessdata.ownerid
    let body = JSON.parse(JSON.stringify({"ownerid":businessdata.ownerid, "lga":businessdata.lga, "ward":businessdata.ward, "town":businessdata.ward,"category":businessdata.category, "operation": businessdata.operation, "sector": businessdata.sector, "structure":businessdata.structure, "subsector":businessdata.subsector, "business_type": businessdata.business_type, "business_name": businessdata.business_name, "value":businessdata.value, "location":{"latitude":businessdata.latitude, "longitude":businessdata.longitude}, "address":{"house_no":businessdata.house_no, "plot_no":businessdata.plot_no, "block_no":businessdata.block_no, "flat_no":businessdata.flat_no, "street_name":businessdata.street_name, "district_name":businessdata.district_name} }))
    const req = this.http.post(header,body)
    .subscribe(res => {console.log(res); }
    );
  }


}