import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expo-day',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './expo-day.html',
  styleUrl: './expo-day.scss',
})
export class ExpoDay {
  dayTitle = 'Expo Day Schedule';
  dayDescription = 'A complete agenda of sessions, speaker meetups, and networking lounges for the event day.';

  sessions = [
    { time: '09:00 AM', topic: 'Opening Keynote', location: 'Main Hall' },
    { time: '10:30 AM', topic: 'Design and Innovation', location: 'Conference Room A' },
    { time: '12:00 PM', topic: 'Lunch Break', location: 'Food Court' },
    { time: '01:30 PM', topic: 'Product Demos', location: 'Expo Floor' },
    { time: '03:00 PM', topic: 'Networking Session', location: 'Lounge Area' }
  ];
}
