
export class AssessmentData{
    public paymentoption?: string;
	public revstream?: string;
	public agency?: string;
    public payfreq?: string;
    public payfrequency?: number;
    public revsubstream?: string;
    public assessgrp?: string;
    public settlemethod?: string;
    public itemsubcategory?: string;
    public itemcategory?: string;
    public itemcat?: any;
    public assesssubgrp?: string;
}

export interface Assessment{
    id: number;
    asset: any;
    agency: string;
    payfrequency: string;
    settlemethod: string;
    itemcategory: string;
    status: string;
    amount: string;
    value: string;
    assessid: string;
    startdate: any;
    duedate:any;
    item: any

    
}

export interface Bill{
    id: number;
    bill_generated_date: any;
    bill_due_date: any;
    billrefno: string;
    current_amount: string;
    item: any;
    previous_bal: string;
    status: string;
    total: string;


    
}

