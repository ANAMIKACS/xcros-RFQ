import { Component } from '@angular/core';

@Component({
  selector: 'app-details-user',
  imports: [],
  templateUrl: './details-user.html',
  styleUrl: './details-user.scss',
})
export class DetailsUser {
//RFQ
isRfqBoxOpen = true;
activeSection = 'listing';

toggleRfqOpen() {
  this.isRfqBoxOpen = !this.isRfqBoxOpen;
}

setActive(section: string) {
  this.activeSection = section;
}
dashboardData = [
  {
    icon: '/listingpage/campaign-icon.png',
    value: '20+',
    title: 'Campaign'
  },
  {
    icon: '/listingpage/Rfq-icon.png',
    value: '10+',
    title: "RFQ's"
  },
  {
    icon: '/listingpage/Replies-icon.png',
    value: '100+',
    title: 'Replies'
  },
  {
    icon: '/listingpage/Interest-icon.png',
    value: '2000+',
    title: 'Interests'
  },
];

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
