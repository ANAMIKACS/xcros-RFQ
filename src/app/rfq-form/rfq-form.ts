import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rfq-form',
  imports: [ButtonModule, StepperModule, FormsModule],
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
activeStep: number = 1;
acceptTerms: boolean = false;


onNext(activateCallback: (step: number) => void) {
    activateCallback(3);
  }

  onBack(activateCallback: (step: number) => void) {
    activateCallback(1);
}
simpleFields = [
    { label: 'Name',       type: 'text' },
    { label: 'Profession', type: 'text' },
    { label: 'Company',    type: 'text' },
    { label: 'Designation',type: 'text' },
    { label: 'Address',    type: 'text' },

  ];

  // Fields for State, City, Pincode row
  addressFields = [
    { label: 'State' },
    { label: 'City' },
    { label: 'Pincode' }
  ]

  simple = [
      { label: 'Email',      type: 'email' },
    { label: 'Mobile',     type: 'tel' },
    { label: 'Age',        type: 'text' }
  ]

  propertyFields = [
    {label: 'Property', type: 'text'},

  ]
   isplotopen = false;
  isapartmentopen = false;
  isvillaopen = false;
  isindividualopen = false;
  plot(): void {
    this.isplotopen = true;
    this.isapartmentopen = false;
    this.isvillaopen = false;
  }

  apartment(): void {
    this.isplotopen = false;
    this.isapartmentopen = true;
    this.isvillaopen = false;
  }

  villa(): void {
    this.isplotopen = false;
    this.isapartmentopen = false;
    this.isvillaopen = true;
  }
  individual(){
    this.isindividualopen = true;
    this.isapartmentopen = false;
    this.isplotopen = false;

  }
}
