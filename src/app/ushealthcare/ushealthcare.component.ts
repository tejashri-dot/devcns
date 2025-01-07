import { Component } from '@angular/core';

@Component({
  selector: 'app-ushealthcare',
  imports: [],
  templateUrl: './ushealthcare.component.html',
  styleUrl: './ushealthcare.component.css'
})
export class UshealthcareComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
