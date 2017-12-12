import { Component, OnInit, ViewChild } from '@angular/core';
import { AssetService } from '../Services/asset.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Asset } from '../asset-data';

import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';


@Component({
  selector: 'app-allasset-component',
  templateUrl: './all-asset.component.html',
  styleUrls: ['./all-asset.component.css']
})
export class AllAssetComponent implements OnInit {
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
}
