import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expo-home',
  imports: [RouterLink],
  templateUrl: './expo-home.html',
  styleUrl: './expo-home.scss',
})
export class ExpoHome {
images = [
  '/EXPO/bg-img1.png',
  '/EXPO/bg-img2.png'
];


events = [
  {
    image: '/EXPO/property-expo.png',
    title: 'Property Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  },
  {
    image: '/EXPO/furniture-expo.png',
    title: 'Furniture Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  },
  {
    image: '/EXPO/farm-expo.png',
    title: 'Farm lands Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  },
   {
    image: '/EXPO/property-expo.png',
    title: 'Property Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  },
  {
    image: '/EXPO/furniture-expo.png',
    title: 'Furniture Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  },
  {
    image: '/EXPO/farm-expo.png',
    title: 'Farm lands Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  },
   {
    image: '/EXPO/property-expo.png',
    title: 'Property Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  },
  {
    image: '/EXPO/furniture-expo.png',
    title: 'Furniture Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  },
  {
    image: '/EXPO/farm-expo.png',
    title: 'Farm lands Expo',
    status: 'Upcoming',
    category: 'Category',
    date: '13 March,2026',
    duration: '3 Days',
    description: 'Strategists who think in code. Turning technology into your competitive advantage.',
    link: ['/expo/details']
  }
];
currentIndex = 0;

ngOnInit() {
  setInterval(() => {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }, 1500);
}




}
