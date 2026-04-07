import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.html',
  styleUrl: './property.scss',
})
export class AdminProperty {

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
  propertyDetails = [
  { icon: 'fa-regular fa-house', label: 'PROPERTY', value: 'Property 1' },
  { icon: 'fa-solid fa-building', label: 'PROPERTY', value: 'Apartment' },
  { icon: 'fa-solid fa-bed', label: 'BEDROOMS', value: '2' },
  { icon: 'fa-solid fa-shower', label: 'BATHROOMS', value: '2' },
  { icon: 'fa-solid fa-up-right-and-down-left-from-center', label: 'PROPERTY SIZE', value: '1025 sqft' },
  { icon: 'fa-solid fa-money-bill-trend-up', label: 'PURPOSE', value: 'Investment' },
  { icon: 'fa-solid fa-square-parking', label: 'PARKING', value: 'Four Wheeler' },
  { icon: 'fa-solid fa-square-parking', label: 'PARKING TYPE', value: 'Closed' },
  { icon: 'fa-solid fa-square-parking', label: 'NO OF PARKING', value: '2' },
  { icon: 'fa-solid fa-money-bill', label: 'BUDGET', value: '₹ 1.03 cr' },
  { icon: 'fa-solid fa-question', label: 'HOW SOON ?', value: '6 Months' },
  { icon: 'fa-solid fa-money-bills', label: 'INCOME', value: '₹ 1,00,000' },
  { icon: 'fa-solid fa-wallet', label: 'LOAN REQUIREMENT', value: '₹ 90,00,000' },
  { icon: 'fa-solid fa-earth-americas', label: 'PREFERRED LOCATION', value: 'City' },
  { icon: 'fa-solid fa-location-dot', label: 'PREFERRED LOCATION', value: 'Chennai' },
  { icon: 'fa-solid fa-circle-plus', label: 'AMENITIES', value: '100 +' }
];
}
