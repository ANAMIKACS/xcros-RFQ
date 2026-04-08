import { Component } from '@angular/core';

@Component({
  selector: 'app-replies',
  imports: [],
  templateUrl: './replies.html',
  styleUrl: './replies.scss',
})
export class Replies {
   replies = [
    {
      image: '/DetailsUser/hotel-img.png',
      name: 'User Name',
      date: '20 Jan, 2026',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscin, Lorem sum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet. '
    },
    {
      image: '/DetailsUser/hotel-img.png',
      name: 'User Name',
      date: '20 Jan, 2026',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscin, Lorem sum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet. '
    },
    {
      image: '/DetailsUser/hotel-img.png',
      name: 'User Name',
      date: '20 Jan, 2026',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscin, Lorem sum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet. '
    },
    {
      image: '/DetailsUser/hotel-img.png',
      name: 'User Name',
      date: '20 Jan, 2026',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscin, Lorem sum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet. '
    }

  ];
  
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
