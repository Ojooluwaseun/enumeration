import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Asset, AssetData } from '../asset-data';
import { Profile } from '../profile-data';

@Injectable()
export class AssetService {
  private getUrl = 'http://54.193.48.195:8000/rest/db/asset/getall';
  private postUrl = 'http://54.193.48.195:8000/rest/db/asset/building/add?owner=';
  private getAssetUrl = 'http://54.193.48.195:8000/rest/db/asset/type/BUILDING';
  private profileUrl = 'http://54.193.48.195:8000/rest/db/profile/getbytype/BUILDING';
  private addProfileUrl = 'http://54.193.48.195:8000/rest/db/asset/profile/add?assetid='

  profile: Observable<Profile[]>
  assetid : number
  ownerid: string
  assetdata: AssetData
  profileid =  []

  constructor( private http: HttpClient) { }

  getAsset(): Observable<Asset[]>{
    return this.http.get<Asset[]>(this.getUrl);
  }

  getAssetByType(){
    const req = this.http.get<Asset[]>(this.getAssetUrl)
    .subscribe( res => {console.log(res)});    
  }

  getProfile(){
    return this.http.get<Profile[]>(this.profileUrl)
       
  }
  

  /*getPro(){
    return this.http.get<Profile>(this.profileUrl)
    .subscribe(res => { for  ( var i in res) {
    this.profileid.push(res[i].id)
    console.log(this.profileid);
    }})
       }*/
       
  addAsset(assetdata:AssetData) {
    let header = this.postUrl + assetdata.ownerid
    let body = JSON.parse(JSON.stringify({"ownerid":assetdata.ownerid, "lga":assetdata.lga, "ward":assetdata.ward, "town":assetdata.ward,"building_completion":assetdata.building_completion, "building_occupancy": assetdata.building_occupancy, "occupancy_type": assetdata.occupancy_type, "building_purpose":assetdata.building_purpose, "building_type":assetdata.building_type, "value": assetdata.value, "registered_date": "2017-12-17", "location":{"latitude":assetdata.latitude, "longitude":assetdata.longitude}, "address":{"houseNo":assetdata.houseNo, "plotNo":assetdata.plotNo, "blockNo":assetdata.blockNo, "flatNo":assetdata.flatNo, "streetName":assetdata.streetName, "districtName":assetdata.districtName} }))
    const req = this.http.post<Asset>(header,body)
    .subscribe(res => {this.assetid = res.id, this.ownerid = res.ownerid})
  }


  addProfile(profile:any){
    let header = this.addProfileUrl + this.assetid
    let body = JSON.parse(JSON.stringify(profile))
    const req = this.http.post(header,body)
    .subscribe(res => {console.log(res); }
    );
  }
  }

