import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('xcros-RFQ');

  constructor(router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }
}
