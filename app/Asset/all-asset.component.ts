import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AssetService } from '../Services/asset.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Asset } from '../asset-data';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';


@Component({
  selector: 'app-allasset-component',
  templateUrl: './all-asset.component.html',
  styleUrls: ['./all-asset.component.css']
})

export class AllAssetComponent implements AfterViewInit {
    displayedColumns = ['ownerid','lga', 'ward', 'town', 'building_purpose', 'building_type'];
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

    constructor(private assetService: AssetService) {}

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;

        merge(this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
            this.isLoadingResults = true;
            return this.assetService.getAsset()
            })
        ).subscribe(data => {this.dataSource.data = data, this.isLoadingResults = false;});
    }
  
}

/*export class AllAssetComponent implements OnInit {
    displayedColumns = ['ownerid','lga', 'ward', 'town', 'building_purpose', 'building_type'];
    dataSource= new AssetDataSource(this.assetService);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( private assetService: AssetService) {}
    ngOnInit() {

    }
}

export class AssetDataSource extends DataSource<any>{
    isLoadingResults = true;
    constructor(private assetService: AssetService){
        super();
    }

    connect(): Observable<Asset[]>{
        this.isLoadingResults = false;
        return this.assetService.getAsset();
    }

    disconnect(){}
}*/
