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
}
