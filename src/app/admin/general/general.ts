import { Component } from '@angular/core';

@Component({
  selector: 'app-general',
  imports: [],
  templateUrl: './general.html',
  styleUrl: './general.scss',
})
export class AdminGeneral {

//Media box
  isMediaOpen = false;
toggleMedia() {
  this.isMediaOpen = !this.isMediaOpen;
}
 marketingItems = [
    'Digital Marketing',
    'SMS',
    'Whatsapp',
    'Email',
    'Calls',
    'Print',
    'Social Media Marketing',
    'Influencer marketing'
  ];
  //Statistics box
  isStatisticsOpen = false;
toggleStatistics() {
  this.isStatisticsOpen = !this.isStatisticsOpen;
}
statistics = [
    { title: 'Campaigns', value: 0 },
    { title: 'Users', value: 0 },
    { title: 'Posts', value: 0 },
    { title: 'Seller Replies', value: 0 },
    { title: 'User Replies', value:0},
    { title: 'tags', value:0},
  ];
  generalDetails = [
  { icon: 'fa-regular fa-calendar', label: 'DATE', value: 'October 24, 2023' },
  { icon: 'fa-regular fa-file-lines', label: 'FORM NO', value: '987654' },
  { icon: 'fa-solid fa-bullhorn', label: 'SOURCE', value: 'Print AD' },
  { icon: 'fa-regular fa-newspaper', label: 'AD SOURCE', value: 'Newspaper' },
  {
    icon: 'fa-regular fa-newspaper',
    label: 'TERMS & CONDITIONS',
    value: 'Accepted',
    type: 'status'   // 👈 special case
  }
];
}
