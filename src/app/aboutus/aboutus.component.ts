import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const counters = document.querySelectorAll('.counter') as NodeListOf<HTMLElement>;

    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target')!;
        let count = +counter.innerText;

        const increment = target / 200; // Adjust speed by changing this value

        if (count < target) {
          count = Math.ceil(count + increment);
          counter.innerText = `${count}`;
          setTimeout(updateCounter, 10); // Adjust the interval speed
        } else {
          // Add the '+' sign after the target is reached
          counter.innerText = `${target}+`;
        }
      };

      updateCounter();
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
