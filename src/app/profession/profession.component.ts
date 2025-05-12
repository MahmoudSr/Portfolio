import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-profession',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profession.component.html',
  styleUrl: './profession.component.scss',
})
export class ProfessionComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return; // ✅ don't run on server

    const items = this.el.nativeElement.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item: Element) => observer.observe(item));
  }

  careerEvents = [
    {
      side: 'left',
      icon: '🎓',
      title: 'Graduated',
      description:
        'BSc in Computer and Communication Engineering, Lebanese International University.',
      year: 'Oct 2020 - Oct 2024',
    },
    {
      side: 'right',
      icon: '🧑‍💻',
      title: 'Etech',
      description:
        'Independently designed and launched a responsive company website using Angular.',
      year: 'Aug 2023 - Oct 2023',
    },
    {
      side: 'left',
      icon: '💼',
      title: 'Internship',
      description:
        'Built features for internal tools and client apps during an Angular-based frontend internship.',
      year: 'Dec 2024 - Jan 2025',
    },
    {
      side: 'right',
      icon: '💼',
      title: 'Internship',
      description:
        'Built features for internal tools and client apps during an Angular-based frontend internship.',
      year: 'Dec 2024 - Jan 2025',
    },
  ];
}
