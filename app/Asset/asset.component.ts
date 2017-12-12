import { Component, OnInit,OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Validators, NgForm  } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { AssetData, Asset} from '../asset-data';
import { PayerData, Payer } from '../payer-data';
import { Profile } from '../profile-data';
import { AssetService } from '../Services/asset.service';
import { PayerService } from '../Services/payer.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-asset-form',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})


export class AssetComponent implements OnInit {
  step = 0;
  assetdata = new AssetData;
  data:  Observable<Payer[]>

  profiles: Observable<Profile[]>
  profile_ids = []

  lgas = this.assetdata.lgas;
  buildingtypes = this.assetdata.buildingtypes;
  buildingcompletions = this.assetdata.buildingcompletions; 
  buildingoccupancies = this.assetdata.buildingoccupancies;
  occupancytypes = this.assetdata.occupancytypes;
  buildingpurposes = this.assetdata.buildingpurposes;

  


  
  constructor(private assetService: AssetService, private payerService: PayerService) {
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.data =  this.payerService.getPayerbyTin(this.assetdata.ownerid);
    console.log(this.data)
  
    this.profiles = this.assetService.getProfile();
    console.log(this.profiles)

  }
 
   
  ngOnChanges(){

  }
  

  onSubmit(){
    this.assetService.addAsset(this.assetdata)
    this.assetService.displayAsset()
    
  }


  addAssetProfile(){
    for  ( var i in this.assetdata.profile) {
    this.profile_ids.push(this.assetdata.profile[i].id)
    }
    this.assetService.addProfile(this.profile_ids)
  }
}

