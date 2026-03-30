import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-rfq-listing',
  standalone: true,
  imports: [CommonModule,CarouselModule, FormsModule],
  templateUrl: './rfq-listing.html',
  styleUrl: './rfq-listing.scss',
   schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class RfqListing {
@ViewChild('image') carousel!: any;
  position: 'left' = "left";
prev() {
  this.carousel?.navBackward();
}

next() {
  this.carousel?.navForward();
}

getTotalPages(): number {
  return Math.ceil(this.images.length / this.carousel.numScroll);
}

 images: any = [];
    responsiveOptions: any[] = [
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
];

  ngOnInit() {
    this.images = [
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' }
    ];
  }
 //Page Wrapper
isFilterOpen = false;

overlay() {
  this.isFilterOpen = true;
}
closeFilter() {
  this.isFilterOpen = false;
}
  isFeatureBoxOpen = true;
  toggleFeatureBoxOpen() {
    this.isFeatureBoxOpen = !this.isFeatureBoxOpen;
  }

 //Map
 isViewMapOpen= false;
toggleViewMap() {
  this.isViewMapOpen = !this.isViewMapOpen;
}
//City box
isPropertyBoxOpen= false;
togglePropertyBoxOpen(){
  this.isPropertyBoxOpen = !this.isPropertyBoxOpen;
}
//Location box
isLocationBoxOpen= false;
toggleLocatioBoxOpen(){
  this.isLocationBoxOpen = !this.isLocationBoxOpen;
}
//City box
isCityBoxOpen=false;
toggleCityBoxOpen(){
  this.isCityBoxOpen=!this.isCityBoxOpen;
}
//Pincode Box
isPincodeBoxOpen=false;
togglePincodeBoxOpen(){
  this.isPincodeBoxOpen=!this.isPincodeBoxOpen;
}
//Budget Box
isBudgetBoxOpen=false;
toggleBudgetBoxOpen(){
  this.isBudgetBoxOpen=!this.isBudgetBoxOpen;
}
//property Status
isStatusBoxOpen=false;
toggleStatusBoxOpen(){
  this.isStatusBoxOpen=!this.isStatusBoxOpen;
}
 //MEDIA DROPDOWN
 value = '';
 isFeaturedOpen = false;
  selectedFeatured = 'Sort By';
  featuredOptions = [
    'Oldest First',
    'Rating H>L',
    'Rating H>L',
    'Rating H>L',
  ];
  toggleFeatured() {
    this.isFeaturedOpen = !this.isFeaturedOpen;
  }
  selectFeatured(option: string) {
    this.selectedFeatured = option;
    this.isFeaturedOpen = false;
  }

  //Features
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
  {
    icon: '/listingpage/bots-icon.png',
    value: '2000+',
    title: 'Bots'
  }
];
//All Listing
isAllListingOpen= false;
toggleListing(){
  this.isAllListingOpen= !this.isAllListingOpen;
}
//Media box
  isMediaOpen = false;
toggleMedia() {
  this.isMediaOpen = !this.isMediaOpen;
}
//Categories box
  isCategoriesOpen = false;
toggleCategories() {
  this.isCategoriesOpen = !this.isCategoriesOpen;
}
//Statistics box
  isStatisticsOpen = false;
toggleStatistics() {
  this.isStatisticsOpen = !this.isStatisticsOpen;
}
listings = [
  {
    image: '/listingpage/lisiting-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  },
  {
    image: '/listingpage/lisiting-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  },
   {
    image: '/listingpage/lisiting-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  },
   {
    image: '/listingpage/lisiting-img.png',
    user: 'User Name',
    date: '20 Jan, 2026',
    type: 'Apartment',
    city: 'Chennai',
    location: 'T.Nagar',
    loan: 'Yes',
    loanPercent: '50%'
  }
];
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
 categories = [
    { name: 'Plot', value: 0 },
    { name: 'Apartment', value: 0 },
    { name: 'Villa', value: 0 },
    { name: 'Individual', value: 0 },
    { name: 'Shop', value: 0 }
  ];
  statistics = [
    { title: 'Campaigns', value: 0 },
    { title: 'Users', value: 0 },
    { title: 'Posts', value: 0 },
    { title: 'Seller Replies', value: 0 },
    { title: 'User Replies', value:0},
    { title: 'tags', value:0},
  ];
description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscin, Lorem sum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua. Lorem ipsum dolor sit amet," 
}