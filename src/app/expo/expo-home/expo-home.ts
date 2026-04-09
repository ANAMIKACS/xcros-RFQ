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

currentIndex = 0;

ngOnInit() {
  setInterval(() => {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }, 1500);
}
}
