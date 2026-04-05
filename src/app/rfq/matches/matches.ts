import { Component } from '@angular/core';

@Component({
  selector: 'app-matches',
  imports: [],
  templateUrl: './matches.html',
  styleUrl: './matches.scss',
})
export class Matches {
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
}
