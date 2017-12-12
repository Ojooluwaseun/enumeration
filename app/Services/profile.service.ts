import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, } from '@angular/common/http';
import {Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Profile, ProfileData, ProfilePropertyData } from '../profile-data';
import "rxjs/Rx";

@Injectable()
export class ProfileService {
  private serviceUrl = 'http://54.193.48.195:8000/rest/db/profile/getall';
  private postUrl = 'http://54.193.48.195:8000/rest/db/profile/add';
  private propertyUrl = 'http://54.193.48.195:8000/rest/db/profile/property/add?profileid='
  private addProfileUrl = 'http://54.193.48.195:8000/rest/db/asset/profile/add?assetid='

  profile_id : number
  asset_id : number

  constructor( private http: HttpClient) { }

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.serviceUrl)
      
  }
 

  createProfile(profiledata:ProfileData) {
    let header = this.postUrl
    let body = JSON.parse(JSON.stringify({"name": profiledata.name,"type": profiledata.type,"metric":profiledata.metric, "frequency":profiledata.frequency,"value": profiledata.value
    }))
    const req = this.http.post<Profile>(header,body)
    .subscribe(res => this.profile_id = res.id);
  }

   addProperty(profilepropertydata: ProfilePropertyData) {
    let header = this.propertyUrl + this.profile_id
    let body = JSON.parse(JSON.stringify([{"name": profilepropertydata.name,"value": profilepropertydata.value }]))
    const req = this.http.post(header,body)
    .subscribe(res => {console.log(res); }
    );
  }
}