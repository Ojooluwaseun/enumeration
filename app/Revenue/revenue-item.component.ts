import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Validators, NgForm  } from '@angular/forms';
import { RevenueService } from '../Services/revenue.service';
import { AssetService } from '../Services/asset.service';
import { BusinessService } from '../Services/business.service';
import { RevenueData, Revenue } from '../revenue-data';
import { Profile } from '../profile-data';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'revenue-item-form',
  templateUrl: './revenue-item.component.html',
  styleUrls: ['./revenue-item.component.css']
})


export class RevenueItemComponent implements OnInit {

    step = 0;
    revenuedata = new RevenueData;
    profile_ids = [];
    profiles: Observable<Profile[]>
    pro: Observable<Profile[]>
    mdas = this.revenuedata.mdas;
    profiletypes = this.revenuedata.profiletypes;

    
    constructor(private revenueService: RevenueService, private assetService: AssetService, private businessService: BusinessService) {
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
    
    ngOnInit(){
        this.profiles = this.assetService.getProfile();
        console.log(this.profiles)

        this.pro = this.businessService.getProfile();
        console.log(this.profiles)
    }


    onSubmit(){
    this.revenueService.addRevItem(this.revenuedata)
    }



    addRevenueProfile(){
        for  ( var i in this.revenuedata.profile) {
        this.profile_ids.push(this.revenuedata.profile[i].id)
        }
        this.revenueService.addProfile(this.profile_ids)
    }

}
