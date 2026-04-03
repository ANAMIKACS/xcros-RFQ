import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-rfq-form',
  imports: [ButtonModule, StepperModule],
  templateUrl: './rfq-form.html',
  styleUrl: './rfq-form.scss',
})
export class RfqForm {
//left-content
backgorund = '/form/Rectangle 52.png'
tabs = [
  {
    title: 'Spot Booking Offers',
    desc: 'Exclusive discounts for on-the-spot bookings during Mela.'
  },
  {
    title: 'Spot Booking Offers',
    desc: 'Exclusive discounts for on-the-spot bookings during Mela.'
  },
   {
    title: 'Spot Booking Offers',
    desc: 'Exclusive discounts for on-the-spot bookings during Mela.'
  },
  {
    title: 'Spot Booking Offers',
    desc: 'Exclusive discounts for on-the-spot bookings during Mela.'
  }
];

waveLine = '/form/waveline.png'
years = [
  {
    Expyear: '12+',
    category: 'year of experience'
  },
  {
    Expyear:'0+',
    category:'Expo'
  },
  {
    Expyear:'0+',
    category:'Media'
  },
  {
    Expyear:'0+',
    category:'Projects'
  },
  {
    Expyear:'0+',
    category:'Surveys'
  },
  {
    Expyear:'0+',
    category:'Sales'
  },
  {
    Expyear:'0+',
    category:'Revenue'
  }
]


sections = [
  { label: 'General' },
  { label: 'Personal' },
  { label: 'Property' },
  { label: 'Additional Requirements' }
];

// activeIndex = 0;

// setActive(index: number) {
//   this.activeIndex = index;
// }

previous (){

}
next(){

}
}
