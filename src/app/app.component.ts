import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  matrixChars = [
    '0',
    '1',
    '{',
    '}',
    '(',
    ')',
    '+',
    '-',
    '=',
    '<',
    '>',
    '*',
    '&',
    '|',
    '^',
    '%',
    '$',
    '#',
    '@',
    '[',
    ']',
    ';',
    ':',
    '!',
    '~',
    '?',
    '/',
    '\\',
    '"',
    "'",
    '_',
  ];

  codeWords: { text: string; left: number; delay: string; size: string }[] = [];

  constructor() {
    this.codeWords = Array.from({ length: 150 }, () => ({
      text: this.matrixChars[
        Math.floor(Math.random() * this.matrixChars.length)
      ],
      left: Math.random() * 100,
      delay: (Math.random() * 10).toFixed(2),
      size: (Math.random() * 0.5 + 0.75).toFixed(2), // random font scale
    }));
  }
}
