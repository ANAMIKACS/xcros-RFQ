import { Component } from '@angular/core';

@Component({
  selector: 'app-expo-details',
  imports: [],
  templateUrl: './expo-details.html',
  styleUrl: './expo-details.scss',
})
export class ExpoDetails {


  leftContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  leftImage = '/xpo-details/left-image.png'

  tab = [
    {name: 'lorem'},
    {name: 'lorem'},
    {name: 'lorem'},
    {name: 'lorem'},
    {name: 'lorem'}

  ]
  media = [
  { icon: 'fa-solid fa-house' },
  { icon: 'fa-solid fa-user' },
  { icon: 'fa-solid fa-envelope' }
];
activeTab: number = 0;

setTab(index: number) {
  this.activeTab = index;
}

selectTab: number = 0;

selectTabIndex(index:number){
  this.selectTab = index;
}
}
