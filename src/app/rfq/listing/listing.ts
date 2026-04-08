import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listing',
  imports: [FormsModule],
  templateUrl: './listing.html',
  styleUrl: './listing.scss',
})
export class Listing {
  selectedDate: string = '';

categories = ['Apartment', 'Villa', 'Plot'];
isDropdownOpen = false;
selectedCategory = '';

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

selectCategory(cat: string) {
  this.selectedCategory = cat;
  this.isDropdownOpen = false;
}
listings = [
  {
    image: '/DetailsUser/hotel-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  },
  {
    image: '/DetailsUser/hotel-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  },
  {
    image: '/DetailsUser/hotel-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  },
  {
    image: '/DetailsUser/hotel-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  },
  {
    image: '/DetailsUser/hotel-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  }
];
description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscin, Lorem sum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua. Lorem ipsum dolor sit amet," 
activePopup: string | null = null;

openPopup(type: string) {
  this.activePopup = type;
}

closePopup() {
  this.activePopup = null;
}
selectedFileName: string = '';

onFileSelect(event: any) {
  const file = event.target.files[0];
  this.selectedFileName = file ? file.name : '';
}

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
}
