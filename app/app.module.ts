import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {HttpClient, HttpHandler, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialModule } from './material.module';

import { PayerService } from './Services/payer.service';
import { AssetService } from './Services/asset.service';
import { BusinessService } from './Services/business.service';
import { ProfileService } from './Services/profile.service';
import { RevenueService } from './Services/revenue.service';
import { AssessmentService } from './Services/assessment.service';
import { SpinnerService } from './spinner.service';
import { AppComponent } from './app.component';
import { PayerComponent } from './Payer/payer.component';
import { AssetComponent } from './Asset/asset.component';
import { AssessmentComponent } from './Assessment/assessment.component';
import { AllPayerComponent } from './Payer/all-payer.component';
import { AllAssetComponent } from './Asset/all-asset.component';
import { BusinessComponent } from './Asset/businessasset.component';
import { ProfileComponent } from './Profile/profile.component';
import { AllProfileComponent } from './Profile/all-profile.component';
import { ProfileAssetComponent } from './Profile/profile-asset.component';
import { RevenueItemComponent } from './Revenue/revenue-item.component';
import {SpinnerComponent} from './spinner.component'
import { app_routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, PayerComponent, AllPayerComponent, AssetComponent, AllAssetComponent, BusinessComponent,ProfileAssetComponent, ProfileComponent,RevenueItemComponent, AssessmentComponent, SpinnerComponent, app_routing.components
  ],
  imports: [FormsModule, ReactiveFormsModule,
    BrowserModule, HttpClientModule, app_routing.routes,
    BrowserAnimationsModule, MaterialModule
  ],
  providers: [PayerService, AssetService, BusinessService, ProfileService, RevenueService, AssessmentService,SpinnerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
