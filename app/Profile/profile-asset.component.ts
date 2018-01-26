import { Component, OnInit,OnChanges } from '@angular/core';
import { AssetData, Asset} from '../asset-data';
import { Profile } from '../profile-data';
import { AssetService } from '../Services/asset.service';
import { BusinessService } from '../Services/business.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'profile-asset-form',
  templateUrl: './profile-asset.component.html',
  styleUrls: ['./profile-asset.component.css']
})


export class ProfileAssetComponent implements OnInit {

    step = 0;
    data:  Observable<Asset[]>
    profiles: Observable<Profile[]>
    pro: Observable<Profile[]>
    assetdata = new AssetData;
    profile_ids = []
    private addProfileUrl = 'http://54.193.48.195:8000/rest/db/asset/profile/add?assetid='

    constructor(private assetService: AssetService, private businessService: BusinessService, private http: HttpClient) {
  }

  setStep(index: number) {
    this.step = index;
  }

  getAsset(){
    this.data =  this.assetService.getAsset();
    console.log(this.data)
   }
    
  ngOnInit() {
    this.profiles = this.assetService.getProfile();
    console.log(this.profiles)

    this.pro = this.businessService.getProfile();
    console.log(this.profiles)
    }

  addProfileAsset(profile:any){
    let header = this.addProfileUrl + this.assetdata.assetid
    let body = JSON.parse(JSON.stringify(profile))
    const req = this.http.post(header,body)
    .subscribe(res => {console.log(res); }
    );
  }

  addAssetProfile(){
    for  ( var i in this.assetdata.profile) {
    this.profile_ids.push(this.assetdata.profile[i].id)
    }
    this.addProfileAsset(this.profile_ids)
  }
  
}
