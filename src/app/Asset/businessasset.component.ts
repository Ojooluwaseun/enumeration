import { Component, OnInit,OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Validators } from '@angular/forms'; 
import { BusinessData } from '../business-data';
import { BusinessService } from '../Services/business.service';
import { PayerService } from '../Services/payer.service';
import { Observable } from 'rxjs/Observable';
import { PayerData, Payer } from '../payer-data';


@Component({
  selector: 'app-business-form',
  templateUrl: './businessasset.component.html',
  styleUrls: ['./businessasset.component.css']
})


export class BusinessComponent implements OnInit {
  step = 0;
  businessdata = new BusinessData;
  data:  Observable<Payer[]>

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
    this.data =  this.payerService.getPayerbyTin(this.businessdata.ownerid);
    console.log(this.data)
    this.businessService.getProfile()
  }
 
   
  ngOnChanges(){

  }
  

  onSubmit(){
    return this.businessService.addBusiness(this.businessdata)
  }

  };
