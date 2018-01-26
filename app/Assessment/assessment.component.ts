import { Component, OnInit,OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Validators, NgForm  } from '@angular/forms';
import { AssetData, Asset} from '../asset-data';
import { Profile } from '../profile-data';
import { Revenue, RevenueData } from '../revenue-data';
import { AssessmentData } from '../assessment-data';
import { AssetService } from '../Services/asset.service';
import { AssessmentService } from '../Services/assessment.service';
import { RevenueService } from '../Services/revenue.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'assessment-form',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})


export class AssessmentComponent implements OnInit {

    step = 0;
    revitems:  Observable<Revenue[]>;
    assetdata = new AssetData;
    revenuedata = new RevenueData;
    mdas = this.revenuedata.mdas;
    assessmentdata = new AssessmentData;
    revitemid = [];

    constructor(private assetService: AssetService, private revenueService: RevenueService, private assessmentService: AssessmentService) {
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

    getAsset(){
        this.assetService.getAssetById(this.assetdata.assetid);
    }


    ngOnInit() {
       this.revitems = this.revenueService.getRevItem();
       console.log(this.revitems);
    }

    genAssess(){
        this.revitemid = this.assessmentdata.itemcat.id;
        this.assessmentService.createAss(this.revitemid, this.assessmentdata, this.assetdata.assetid);

    }

    createBill() {
        this.assessmentService.createBill();
    }
}