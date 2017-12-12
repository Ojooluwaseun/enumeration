import { Component, OnInit, ViewChild } from '@angular/core';
import { PayerService } from '../Services/payer.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Payer } from '../payer-data';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';


@Component({
  selector: 'app-allpayer-component',
  templateUrl: './all-payer.component.html',
  styleUrls: ['./all-payer.component.css']
})
export class AllPayerComponent implements OnInit {
    displayedColumns = ['firstname', 'surname', 'middlename', 'tin', 'phone'];
    dataSource= new PayerDataSource(this.payerService);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( private payerService: PayerService) {}
    ngOnInit() {

    }
}

export class PayerDataSource extends DataSource<any>{
    constructor(private payerService: PayerService){
        super();
    }

    connect(): Observable<Payer[]>{
        return this.payerService.getPayer();
    }

    disconnect(){}
}
