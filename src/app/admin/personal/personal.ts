import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  imports: [],
  templateUrl: './personal.html',
  styleUrl: './personal.scss',
})
export class AdminPersonal {

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
  personalDetails = [
  { icon: 'fa-regular fa-user', label: 'NAME', value: 'User Name' },
  { icon: 'fa-solid fa-briefcase', label: 'PROFESSION', value: 'Business Development Executive' },
  { icon: 'fa-regular fa-building', label: 'COMPANY', value: 'TechNova Solutions' },
  { icon: 'fa-regular fa-id-card', label: 'DESIGNATION', value: 'Senior Lead' },
  { icon: 'fa-regular fa-calendar', label: 'AGE', value: '32' },
  { icon: 'fa-regular fa-envelope', label: 'EMAIL ID', value: 'username@technova.com' },
  { icon: 'fa-solid fa-phone', label: 'MOBILE NUMBER', value: '91+ 91234 56789' },
  { icon: 'fa-regular fa-house', label: 'ADDRESS', value: '245 Market St, Suite 100' },
  { icon: 'fa-regular fa-map', label: 'STATE', value: 'California' },
  { icon: 'fa-regular fa-map', label: 'CITY', value: 'Chennai' },
  { icon: 'fa-regular fa-map', label: 'PINCODE', value: '600001' }
];
}
