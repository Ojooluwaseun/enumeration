import { Component, OnInit,OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Validators } from '@angular/forms'; 
import { BusinessData } from '../business-data';
import { BusinessService } from '../Services/business.service';
import { PayerService } from '../Services/payer.service';
import { Observable } from 'rxjs/Observable';
import { PayerData, Payer } from '../payer-data';
import { Profile } from '../profile-data';


@Component({
  selector: 'app-business-form',
  templateUrl: './businessasset.component.html',
  styleUrls: ['./businessasset.component.css']
})


export class BusinessComponent implements OnInit {
  step = 0;
  businessdata = new BusinessData;
  profiles: Observable<Profile[]>
  profile_ids = []

  lgas = this.businessdata.lgas
  
  constructor(private businessService: BusinessService, private payerService: PayerService) {
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
    this.profiles = this.businessService.getProfile();
    console.log(this.profiles)

  }
 
   
  getPayer(){
    this.payerService.getPayerbyTin(this.businessdata.ownerid)

  }
  

  onSubmit(){
    this.businessdata.reg_date = this.businessdata.registered_date.getFullYear() 
    + '-' + ('0' + (this.businessdata.registered_date.getMonth()+1)).slice(-2) 
    + '-' + ('0' + this.businessdata.registered_date.getDate()).slice(-2);
    
    this.businessService.addBusiness(this.businessdata)
   
  }

  addAssetProfile(){
    for  ( var i in this.businessdata.profile) {
    this.profile_ids.push(this.businessdata.profile[i].id)
    }
    this.businessService.addProfile(this.profile_ids)
  }

  };
