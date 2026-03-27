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
 //MEDIA DROPDOWN
 value = '';
 isFeaturedOpen = false;
  selectedFeatured = 'Featured';
  featuredOptions = [
    'Rating H>L',
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
}