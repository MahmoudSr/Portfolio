import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'Space Tourism',
      description:
        'A challenge to create a responsive website using Angular, SCSS, and TypeScript.',
      tech: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/MahmoudSr/mahmoudsr.github.io',
      demo: 'https://mahmoudsr.github.io/',
      image: 'space-tourism.png',
    },
    {
      id: 2,
      title: 'Clipboard',
      description: 'A personal website built with HTML and CSS.',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/MahmoudSr/FEM-Clipboard',
      demo: 'https://mahmoudsr.github.io/FEM-Clipboard/',
      image: 'clipboard.png',
    },
    {
      id: 3,
      title: 'Loop Studio',
      description:
        'A challenge to create a responsive website using HTML, CSS, and JavaScript.',
      tech: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/MahmoudSr/loop-studio-challange',
      demo: 'https://mahmoudsr.github.io/loop-studio-challange/',
      image: 'loop-studio.png',
    },
    {
      id: 4,
      title: 'E-Tech',
      description:
        'An Undergoing Project For a Lebanese Elevator Company E-Tech, using HTML, CSS, and JavaScript.',
      tech: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/MahmoudSr/E-tech',
      demo: 'https://mahmoudsr.github.io/E-tech/',
      image: 'e-tech.png',
    },
    {
      id: 5,
      title: 'FEM - Insure',
      description:
        'A challenge to create a responsive website using HTML, CSS, and JavaScript.',
      tech: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/MahmoudSr/FEM-Insure',
      demo: 'https://mahmoudsr.github.io/FEM-Insure/',
      image: 'fem.png',
    },
    {
      id: 6,
      title: 'FEM - News',
      description:
        'A challenge to create a responsive website using HTML, CSS, and JavaScript. Mainly focuses on CSS Grid.',
      tech: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/MahmoudSr/FEM-news',
      demo: 'https://mahmoudsr.github.io/FEM-news/',
      image: 'grid-show.png',
    },
    // Add more...
  ];
}
