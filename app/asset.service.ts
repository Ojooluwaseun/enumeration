import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Asset, AssetData } from './asset-data';

@Injectable()
export class AssetService {
  assetdata = new AssetData;
  private getUrl = 'http://54.193.48.195:8000/rest/db/asset/getall';
  private postUrl = 'http://54.193.48.195:8000/rest/db/asset/building/add?owner=';

  constructor( private http: HttpClient) { }

  getAsset(): Observable<Asset[]>{
    return this.http.get<Asset[]>(this.getUrl);
  }

  addAsset(tin: any) {
    this.http.post(this.postUrl + tin, this.assetdata)
    .subscribe(res => {console.log(res); }
    );
  }


}
