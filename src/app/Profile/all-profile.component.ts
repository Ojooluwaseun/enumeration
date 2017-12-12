import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Profile } from '../profile-data';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';


@Component({
  selector: 'app-allprofile-component',
  templateUrl: './all-profile.component.html',
  styleUrls: ['./all-profile.component.css']
})
export class AllProfileComponent implements OnInit {
    displayedColumns = ['id','name', 'type', 'metric', 'value', 'frequency'];
    dataSource= new ProfileDataSource(this.profileService);
    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( private profileService: ProfileService) {}
    ngOnInit() {

    }
}

export class ProfileDataSource extends DataSource<any>{
    constructor(private profileService: ProfileService){
        super();
    }

    connect(): Observable<Profile[]>{
        return this.profileService.getProfile();
    }

    disconnect(){}
}
