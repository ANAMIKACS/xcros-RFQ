import { Routes } from '@angular/router';
import { RfqForm } from './rfq-form/rfq-form';
import { RfqListing } from './rfq-listing/rfq-listing';
import { DetailsUser } from './details-user/details-user';
import { Listing } from './rfq/listing/listing';
import { General } from './rfq/general/general';
import { Personal } from './rfq/personal/personal';
import { Property } from './rfq/property/property';
import { Replies } from './rfq/replies/replies';
import { Matches } from './rfq/matches/matches';
import { Campaigns } from './rfq/campaigns/campaigns';
import { RfqAdminDetails } from './rfq-admin-details/rfq-admin-details';

import { DetailsAdmin } from './details-admin/details-admin';
import { AdminListing } from './admin/listing/listing';
import { AdminGeneral } from './admin/general/general';
import { AdminPersonal } from './admin/personal/personal';
import { AdminProperty } from './admin/property/property';
import { AdminReplies } from './admin/replies/replies';
import { AdminMatches } from './admin/matches/matches';
import { AdminCampaigns } from './admin/campaigns/campaigns';

import { RfqCategory } from './rfq-category/rfq-category';
import { ExpoHome } from './expo/expo-home/expo-home';

export const routes: Routes = [
  {path:'rfqform', component:RfqForm},
  {path:'rfqlisting', component:RfqListing},
 {
    path: 'detailsUser',
    component: DetailsUser,
    children: [
      { path: 'listing', component: Listing },
      { path: 'general', component: General },
      { path: 'personal', component: Personal },
      { path: 'property', component: Property },
      { path: 'replies', component: Replies },
      { path: 'matches', component: Matches },
      { path: 'campaigns', component: Campaigns },
      { path: '', redirectTo: 'listing', pathMatch: 'full' }
    ]
  },

  {
    path:'detailsAdmin',
    component: DetailsAdmin,
    children: [
      { path: 'listing', component: AdminListing },
      { path: 'general', component: AdminGeneral },
      { path: 'personal', component: AdminPersonal },
      { path: 'property', component: AdminProperty },
      { path: 'replies', component: AdminReplies },
      { path: 'matches', component: AdminMatches },
      { path: 'campaigns', component: AdminCampaigns },
      { path: '', redirectTo: 'listing', pathMatch: 'full' }
    ]
  },
  {path:'rfqCategory', component:RfqCategory},
  {path: 'expo',
  children: [
    { path: '', component: ExpoHome },
  ]
}

];
