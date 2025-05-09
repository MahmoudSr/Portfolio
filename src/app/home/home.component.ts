import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  fullText = 'const name = "Mahmoud Srouji";';
  displayedText = '';
  currentIndex = 0;
  typingSpeed = 50;

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    if (this.currentIndex < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }
}
