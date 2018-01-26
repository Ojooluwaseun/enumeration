import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RevenueData, Revenue } from '../revenue-data';
import { AssetData } from '../asset-data';
import { AssessmentData, Assessment, Bill } from '../assessment-data';

@Injectable()
export class AssessmentService {
        private genAssessUrl = 'http://54.193.48.195:8000/rest/db/assess/item/add?revitemID='
        private genBillUrl = 'http://54.193.48.195:8000/rest/db/bill/create?itemID='


    constructor( private http: HttpClient) { }
    id: number;
    ownerid: string
    agency: string;
    payfrequency: string;
    settlemethod: string;
    itemcategory: string;
    status: string;
    amount: string;
    value: string;
    assessid: string;
    startdayOfMonth: string;
    startdayOfWeek: string;
    startmonth: string;
    startyear:string;
    duedayOfMonth: string;
    duedayOfWeek: string;
    duemonth: string;
    dueyear:string;
    itemname: string;
    itemamount: string;

    billid: number;
    previous_bal: string;
    billstatus: string;
    total: string;
    billrefno: string;
    current_amount: string;
    billitemcategory: string;
    billpayfrequency: string
    billstartdayOfMonth: string;
    billstartdayOfWeek: string;
    billstartmonth: string;
    billstartyear:string;
    billduedayOfMonth: string;
    billduedayOfWeek: string;
    billduemonth: string;
    billdueyear:string;
    billowner: string
    item_amount: string;



       
    createAss(revitemid, assessmentdata:AssessmentData, assetid) {
        let header = this.genAssessUrl + revitemid + '&assetID=' + assetid
        let body = JSON.parse(JSON.stringify({"paymentoption":assessmentdata.paymentoption, "revstream":assessmentdata.revstream, "agency":assessmentdata.agency, "payfreq":assessmentdata.payfreq, "payfrequency":assessmentdata.payfrequency, "revsubstream":assessmentdata.revsubstream, "assessgrp":assessmentdata.assessgrp, "settlemethod":assessmentdata.settlemethod, "itemsubcategory":assessmentdata.itemsubcategory, "itemcategory":assessmentdata.itemcategory, "assesssubgrp":assessmentdata.assesssubgrp }))
        this.http.post<Assessment>(header,body)
        .subscribe(res => {this.id = res.id, this.ownerid = res.asset.ownerid, this.agency = res.agency, this.payfrequency = res.payfrequency, this.status = res.status, this.amount = res.amount, this.itemcategory = res.itemcategory,  this.assessid = res.assessid, this.startdayOfMonth = res.startdate.dayOfMonth, this.startdayOfWeek = res.startdate.dayOfWeek, this.startmonth = res.startdate.month, this.startyear = res.startdate.year, this.duedayOfMonth = res.duedate.dayOfMonth, this.duedayOfWeek = res.duedate.dayOfWeek, this.duemonth = res.duedate.month, this.dueyear = res.duedate.year, this.itemname = res.item.name, this.itemamount = res.item.amount, console.log(res)})
   
    }

    createBill(){
        let header = this.genBillUrl + this.id
        let body = JSON.parse(JSON.stringify({}))
        this.http.post<Bill>(header,body)
        .subscribe(res => {this.billid = res.id, this.billowner = res.item.asset.ownerid, this.previous_bal = res.previous_bal, this.billstatus = res.status, this.total = res.total, this.billrefno = res.billrefno, this.current_amount = res.current_amount, this.billitemcategory = res.item.itemcategory, this.billpayfrequency = res.item.payfrequency, this.item_amount = res.item.item.amount, this.billstartdayOfMonth = res.bill_generated_date.dayOfMonth, this.billstartdayOfWeek = res.bill_generated_date.dayOfWeek, this.billstartmonth = res.bill_generated_date.month, this.billstartyear = res.bill_generated_date.year,this.billduedayOfMonth = res.bill_due_date.dayOfMonth, this.billduedayOfWeek = res.bill_due_date.dayOfWeek, this.billduemonth = res.bill_due_date.month, this.billdueyear = res.bill_due_date.year, console.log(res)})

    }
  
  }