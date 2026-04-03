import { Routes } from '@angular/router';
import { RfqForm } from './rfq-form/rfq-form';
import { RfqListing } from './rfq-listing/rfq-listing';
import { DetailsUser } from './details-user/details-user';

export const routes: Routes = [
  {path:'rfqform', component:RfqForm},
  {path:'rfqlisting', component:RfqListing},
  {path:'detailsUser', component: DetailsUser},
];
