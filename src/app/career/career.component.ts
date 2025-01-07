import { Component, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  @ViewChild('timelineSection', { static: false }) timelineSection!: ElementRef;
  @ViewChild('progressBar', { static: false }) progressBar!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (!this.timelineSection || !this.progressBar) {
      return;
    }

    const sectionTop = this.timelineSection.nativeElement.offsetTop;
    const sectionHeight = this.timelineSection.nativeElement.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const progress = ((scrollPosition - sectionTop) / sectionHeight) * 100;
      this.progressBar.nativeElement.style.height = `${progress}%`;
    }
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

