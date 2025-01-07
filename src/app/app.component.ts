/*import { Component, OnInit, OnDestroy,AfterViewInit  } from '@angular/core';
import { RouterLink, RouterOutlet,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Listen to route changes (NavigationEnd event)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll to the top of the page on every route change
      window.scrollTo(0, 0);
    });
  }
  projectcount: number = 0;
  clientcount: number = 0;
  hourstosupportcount: number = 0;
  teammembercount: number = 0;
  customerfeedbackcount: number = 0;

  private projectcountstop: any;
  private clientcountstop: any;
  private hourstosupportcountstop: any;
  private teammemberstop: any;
  private customerfeedbackstop: any;

  ngOnInit(): void {
    // Start all counters when the component initializes
    this.startProjectCount();
    this.startClientCount();
    this.startHourstoSupportCount();
    this.startTeamMemberCount();
    this.startCustomerFeedbackCount();
  }

  ngOnDestroy(): void {
    // Clear all intervals when the component is destroyed to prevent memory leaks
    clearInterval(this.projectcountstop);
    clearInterval(this.clientcountstop);
    clearInterval(this.hourstosupportcountstop);
    clearInterval(this.teammemberstop);
    clearInterval(this.customerfeedbackstop);
  }

  // Start the project count
  startProjectCount(): void {
    this.projectcountstop = setInterval(() => {
      this.projectcount++;
      if (this.projectcount === 300) {
        clearInterval(this.projectcountstop);
      }
    }, 10); // Adjust the interval as needed
  }

  // Start the client count
  startClientCount(): void {
    this.clientcountstop = setInterval(() => {
      this.clientcount++;
      if (this.clientcount === 530) {
        clearInterval(this.clientcountstop);
      }
    }, 10);
  }

  // Start the hours to support count
  startHourstoSupportCount(): void {
    this.hourstosupportcountstop = setInterval(() => {
      this.hourstosupportcount++;
      if (this.hourstosupportcount === 1470) {
        clearInterval(this.hourstosupportcountstop);
      }
    }, 10);
  }

  // Start the team member count
  startTeamMemberCount(): void {
    this.teammemberstop = setInterval(() => {
      this.teammembercount++;
      if (this.teammembercount === 100) {
        clearInterval(this.teammemberstop);
      }
    }, 10);
  }

  // Start the customer feedback count
  startCustomerFeedbackCount(): void {
    this.customerfeedbackstop = setInterval(() => {
      this.customerfeedbackcount++;
      if (this.customerfeedbackcount === 100) {
        clearInterval(this.customerfeedbackstop);
      }
    }, 10);
  }
}*/
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  projectcount: number = 0;
  clientcount: number = 0;
  hourstosupportcount: number = 0;
  teammembercount: number = 0;
  customerfeedbackcount: number = 0;

  private projectcountstop: any;
  private clientcountstop: any;
  private hourstosupportcountstop: any;
  private teammemberstop: any;
  private customerfeedbackstop: any;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Listen to route changes (NavigationEnd event)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll to the top of the page on every route change
      window.scrollTo(0, 0);
    });
  }

  ngOnInit(): void {
    // Start all counters when the component initializes
    this.startProjectCount();
    this.startClientCount();
    this.startHourstoSupportCount();
    this.startTeamMemberCount();
    this.startCustomerFeedbackCount();
  }

  ngOnDestroy(): void {
    // Clear all intervals when the component is destroyed to prevent memory leaks
    clearInterval(this.projectcountstop);
    clearInterval(this.clientcountstop);
    clearInterval(this.hourstosupportcountstop);
    clearInterval(this.teammemberstop);
    clearInterval(this.customerfeedbackstop);
  }

  // Start the project count
  startProjectCount(): void {
    this.projectcountstop = setInterval(() => {
      this.projectcount++;
      if (this.projectcount === 300) {
        clearInterval(this.projectcountstop);
      }
    }, 10); // Adjust the interval as needed
  }

  // Start the client count
  startClientCount(): void {
    this.clientcountstop = setInterval(() => {
      this.clientcount++;
      if (this.clientcount === 530) {
        clearInterval(this.clientcountstop);
      }
    }, 10);
  }

  // Start the hours to support count
  startHourstoSupportCount(): void {
    this.hourstosupportcountstop = setInterval(() => {
      this.hourstosupportcount++;
      if (this.hourstosupportcount === 1470) {
        clearInterval(this.hourstosupportcountstop);
      }
    }, 10);
  }

  // Start the team member count
  startTeamMemberCount(): void {
    this.teammemberstop = setInterval(() => {
      this.teammembercount++;
      if (this.teammembercount === 100) {
        clearInterval(this.teammemberstop);
      }
    }, 10);
  }

  // Start the customer feedback count
  startCustomerFeedbackCount(): void {
    this.customerfeedbackstop = setInterval(() => {
      this.customerfeedbackcount++;
      if (this.customerfeedbackcount === 100) {
        clearInterval(this.customerfeedbackstop);
      }
    }, 10);
  }
}


