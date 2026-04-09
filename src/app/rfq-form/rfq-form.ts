import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rfq-form',
  imports: [CommonModule, ButtonModule, StepperModule, FormsModule],
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

acceptTerms: boolean = false; // default = NO

toggleTerms() {
  this.acceptTerms = !this.acceptTerms;
}
activeStep: number = 1;



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
  budjetFields = [
    {label: 'budjet', type: 'text'},
    {label: 'Have Soon?', type: 'text'},
  ]
  locationFields=[
     {label: 'Locations', type: 'text'},
    {label: 'Amenities', type: 'text'},
  ]
  isplotopen = false;
isapartmentopen = false;
isvillaopen = false;
isindividualopen = false;

propertyType = 'Plot';
plotType = '';
bedrooms = '';
bathrooms = '';
propertySize = '';
selectedParking = '';
parkingType = '';
loanRequired: boolean | null = null;
income = '';
loanRequirement = '';

resetAll() {
  this.isplotopen = false;
  this.isapartmentopen = false;
  this.isvillaopen = false;
  this.isindividualopen = false;
}

setPropertyType(type: string) {
  this.propertyType = type;
}

setParking(value: string) {
  this.selectedParking = value;
  if (value !== 'Four-wheeler') {
    this.parkingType = '';
  }
}

setLoanRequired(value: boolean) {
  this.loanRequired = value;
  if (!value) {
    this.income = '';
    this.loanRequirement = '';
  }
}

plot() {
  this.resetAll();
  this.isplotopen = true;
}

apartment() {
  this.resetAll();
  this.isapartmentopen = true;
}

villa() {
  this.resetAll();
  this.isvillaopen = true;
}

individual() {
  this.resetAll();
  this.isindividualopen = true;
}
}
