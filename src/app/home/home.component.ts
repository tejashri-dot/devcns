import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}


