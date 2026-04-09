import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expo-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './expo-details.html',
  styleUrl: './expo-details.scss',
})
export class ExpoDetails {

  activeTab: string = 'register';
  activeSubTab: string = 'exhibitors';
  activeScheduleDay: string = 'day1';

  scheduleExpandedIdx: number | null = 0;
  faqExpandedIdx: number | null = 0;

  tabs = ['pricing', 'register', 'schedule', 'gallery', 'participants', 'faq', 'contact'];
  subTabs = ['exhibitors', 'visitors'];
  scheduleDays = ['day1', 'day2', 'day3', 'day4', 'day5'];

  scheduleList = [
    { date: 'March 17, 2026', time: '13:00', title: 'Introduction to Event Planning', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { date: 'March 17, 2026', time: '13:00', title: 'Introduction to Event Planning', content: 'Details here...' },
    { date: 'March 17, 2026', time: '13:00', title: 'Introduction to Event Planning', content: 'Details here...' },
    { date: 'March 17, 2026', time: '13:00', title: 'Introduction to Event Planning', content: 'Details here...' },
    { date: 'March 17, 2026', time: '13:00', title: 'Introduction to Event Planning', content: 'Details here...' }
  ];

  galleryImages = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2073&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop',
    '', ''
  ];

  participants = [
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', dark: true },
    { name: 'Mercedes', src: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg', dark: false },
    { name: 'Pepsi', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg', dark: false },
    { name: 'Bank', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Bank_of_America_logo.svg', dark: true, red: true },
    { name: 'Coca Cola', src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg', dark: true, bgImage: true },
    { name: 'Bajaj', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Bajaj_Auto_logo.svg', dark: true, blue: true },
    { name: 'Argos', src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Argos_logo.svg', dark: true, red: true },
    { name: 'IKEA', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg', dark: true, blue: true },
    { name: 'Adobe', src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Adobe_Acrobat_logo.svg', dark: true, red: true },
    { name: 'AMD', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg', dark: true },
    { name: 'Apple Pay', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg', dark: true },
    { name: 'Sony', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Sony_logo.svg', dark: true },
    { name: 'Tesla', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png', dark: true },
    { name: 'TikTok', src: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg', dark: true },
    { name: 'BMW', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg', dark: false }
  ];

  faqs = [
    { question: '1. Introduction to Event Planning', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: '2. Introduction to Event Planning', answer: 'Details...' },
    { question: '3. Introduction to Event Planning', answer: 'Details...' },
    { question: '4. Introduction to Event Planning', answer: 'Details...' },
    { question: '5. Introduction to Event Planning', answer: 'Details...' }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

  setSubTab(tab: string) {
    this.activeSubTab = tab;
  }

  setScheduleDay(day: string) {
    this.activeScheduleDay = day;
  }

  toggleSchedule(index: number) {
    if (this.scheduleExpandedIdx === index) {
      this.scheduleExpandedIdx = null;
    } else {
      this.scheduleExpandedIdx = index;
    }
  }

  toggleFaq(index: number) {
    if (this.faqExpandedIdx === index) {
      this.faqExpandedIdx = null;
    } else {
      this.faqExpandedIdx = index;
    }
  }
}
