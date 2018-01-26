import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PayerService } from '../Services/payer.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Payer } from '../payer-data';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-allpayer-component',
  templateUrl: './all-payer.component.html',
  styleUrls: ['./all-payer.component.css']
})
/*export class AllPayerComponent implements OnInit {
    displayedColumns = ['firstname', 'surname', 'middlename', 'tin', 'phone'];
    dataSource= new PayerDataSource(this.payerService);

    resultsLength = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor( private payerService: PayerService) {}
    ngOnInit() {

    }
}

export class PayerDataSource extends DataSource<any>{
    isLoadingResults = false;
    constructor(private payerService: PayerService){
        super();
    }

    connect(): Observable<Payer[]>{
        return this.payerService.getPayer();
    }

    disconnect(){}

    displayPayer(){
        
    }
}*/

export class AllPayerComponent implements AfterViewInit {
    displayedColumns = ['firstname', 'surname', 'middlename', 'tin', 'phone'];
    dataSource= new MatTableDataSource;
    resultsLength = 0;
    isLoadingResults = false;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor(private payerService: PayerService) {}

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;

        merge(this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
            this.isLoadingResults = true;
            return this.payerService.getPayer()
            })
        ).subscribe(data => {this.dataSource.data = data, this.isLoadingResults = false;});
    }
  
}

