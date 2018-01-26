import { Routes, RouterModule } from '@angular/router';

import { PayerComponent } from './Payer/payer.component';
import { AssetComponent } from './Asset/asset.component';
import { AllPayerComponent } from './Payer/all-payer.component';
import { AllAssetComponent } from './Asset/all-asset.component';
import { BusinessComponent } from './Asset/businessasset.component';
import { ProfileComponent } from './Profile/profile.component';
import { AssessmentComponent } from './Assessment/assessment.component';
import { AllProfileComponent } from './Profile/all-profile.component';
import { ProfileAssetComponent } from './Profile/profile-asset.component';
import { RevenueItemComponent } from './Revenue/revenue-item.component';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/payerform' },
  { path: 'payerform', component: PayerComponent    },
  { path: 'assetform', component: AssetComponent    },
  { path: 'allpayer', component: AllPayerComponent    },
  { path: 'allasset', component: AllAssetComponent    },
  { path: 'businessform', component: BusinessComponent    },
  { path: 'profileform', component: ProfileComponent    },
  { path: 'allprofile', component: AllProfileComponent    },
  { path: 'assetprofile', component: ProfileAssetComponent    },
  { path: 'revenueform', component: RevenueItemComponent    },
  { path: 'assessmentform', component: AssessmentComponent    },
];

export const app_routing = {
  routes: RouterModule.forRoot(app_routes),
  components: [ PayerComponent, AssetComponent, BusinessComponent, AllPayerComponent, AllAssetComponent, ProfileComponent, AllProfileComponent, ProfileAssetComponent, RevenueItemComponent, AssessmentComponent]
};
