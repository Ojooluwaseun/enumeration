import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { PayerData} from '../payer-data';
import { PayerService } from '../Services/payer.service';


@Component({
  selector: 'app-payer-form',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css']
})

export class PayerComponent implements OnInit {
  step = 0;
  payerdata = new PayerData;
  
  states =  this.payerdata.states;
  status = this.payerdata.status;
  lgas = this.payerdata.lgas;
  

  constructor(private payerService: PayerService) {
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
  onSubmit() {
    this.payerService.addPayer(this.payerdata);
  }
}
