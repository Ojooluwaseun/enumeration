import { Component, OnInit,OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { ProfileData, Profile, ProfilePropertyData} from '../profile-data';
import { ProfileService } from '../Services/profile.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http'

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  step = 0;
  profiledata = new ProfileData;
  profilepropertydata = new ProfilePropertyData
  
  types = this.profiledata.types

  constructor(private profileService: ProfileService) {

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
    }
 
   
  ngOnChanges(){

  }

  onSubmit() {
    return this.profileService.createProfile(this.profiledata);

  }

  addProperty(){
    return this.profileService.addProperty(this.profilepropertydata)
  }
  
  
  };

