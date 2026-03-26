import { Routes } from '@angular/router';
import { RfqForm } from './rfq-form/rfq-form';
import { RfqListing } from './rfq-listing/rfq-listing';

export const routes: Routes = [
  {path:'rfqform', component:RfqForm},
  {path:'rfqlisting', component:RfqListing}
];
