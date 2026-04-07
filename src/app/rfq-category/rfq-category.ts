import { Component } from '@angular/core';

@Component({
  selector: 'app-rfq-category',
  imports: [],
  templateUrl: './rfq-category.html',
  styleUrl: './rfq-category.scss',
})
export class RfqCategory {
categories = [
  {
    name: 'Realty',
    type: 'Real Estate',
    icon: 'fa-solid fa-house',
    stats: {
      views: '10+',
      rfq: '10+',
      replies: '10+',
      participants: '10+'
    }
  },
  {
    name: 'Realty',
    type: 'Real Estate',
    icon: 'fa-solid fa-house',
    stats: {
      views: '10+',
      rfq: '10+',
      replies: '10+',
      participants: '10+'
    }
  },
  {
    name: 'Realty',
    type: 'Real Estate',
    icon: 'fa-solid fa-house',
    stats: {
      views: '10+',
      rfq: '10+',
      replies: '10+',
      participants: '10+'
    }
  },
  {
    name: 'Realty',
    type: 'Real Estate',
    icon: 'fa-solid fa-house',
    stats: {
      views: '10+',
      rfq: '10+',
      replies: '10+',
      participants: '10+'
    }
  },
  {
    name: 'Realty',
    type: 'Real Estate',
    icon: 'fa-solid fa-house',
    stats: {
      views: '10+',
      rfq: '10+',
      replies: '10+',
      participants: '10+'
    }
  },
  {
    name: 'Realty',
    type: 'Real Estate',
    icon: 'fa-solid fa-house',
    stats: {
      views: '10+',
      rfq: '10+',
      replies: '10+',
      participants: '10+'
    }
  }
];
selectedIndex: number | null = null;

selectCard(index: number) {
  if (this.selectedIndex === index) {
    this.selectedIndex = null;  // 🔥 deselect
  } else {
    this.selectedIndex = index; // select
  }
}
}
