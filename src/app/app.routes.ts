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

export const routes: Routes = [
  {path:'rfqform', component:RfqForm},
  {path:'rfqlisting', component:RfqListing},
  {path: 'rfqadmindetails', component:RfqAdminDetails},
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
      // { path: '', redirectTo: 'listing', pathMatch: 'full' }
    ]
  },


];
