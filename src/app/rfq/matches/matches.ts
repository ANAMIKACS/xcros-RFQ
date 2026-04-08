import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matches',
  imports: [DatePickerModule,FormsModule],
  templateUrl: './matches.html',
  styleUrl: './matches.scss',
})
export class Matches {
  categories: string[] = ['All Categories', 'Apartment', 'Villa', 'Plot'];

selectedCategory: string = 'All Categories';

isOpen: boolean = false;

toggleDropdown() {
  console.log('clicked'); // check console
  this.isOpen = !this.isOpen;
}

selectCategory(cat: string, event: Event) {
  event.stopPropagation(); 
  this.selectedCategory = cat;
  this.isOpen = false;
}
 matches = [
    {
      image: '/DetailsUser/property-img.png',
      price: '148,000',
      name: 'Property Name',
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/DetailsUser/property-img.png',
      price: '148,000',
      name: 'Property Name',
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/DetailsUser/property-img.png',
      price: '148,000',
      name: 'Property Name',
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/DetailsUser/property-img.png',
      price: '148,000',
      name: 'Property Name',
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/DetailsUser/property-img.png',
      price: '148,000',
      name: 'Property Name',
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/DetailsUser/property-img.png',
      price: '148,000',
      name: 'Property Name',
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/DetailsUser/property-img.png',
      price: '148,000',
      name: 'Property Name',
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/DetailsUser/property-img.png',
      price: '148,000',
      name: 'Property Name',
      location: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
rangeDates: Date[] = [];
//pagenation
  currentPage: number = 1;
  totalPages: number = 4;

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
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
