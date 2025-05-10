import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  tag = '</>';

  codeSnippets = Array.from({ length: 50 }, (_, i) => ({
    text: this.getWord(i),
    color: this.getColor(i),
    left: `${(i % 10) * 9 + 5}%`, // spread across row (10 per row)
    top: `${2 - Math.floor(i / 10) * 20}px`, // create new row every 10
    delay: `${i * 0.15}s`,
    rotation: `${(Math.random() * 120 - 60).toFixed(2)}deg`, // -60° to +60°
  }));

  getWord(i: number): string {
    const words = [
      'const',
      'function()',
      '{ }',
      'return',
      '<div>',
      'let',
      'async',
      '()',
      'export',
      'from',
      'import',
      'if',
      'else',
      'true',
      'false',
      '[ ]',
      'console.log()',
      'document',
      'window',
      'this',
      '=>',
      'for',
      'while',
      'catch',
      'try',
      'typeof',
      'instanceof',
      'Math.random()',
      'new',
      'class',
      'switch',
      'case',
      'null',
      'undefined',
      'Number',
      'String',
      'Boolean',
      'Array',
      'map()',
      'filter()',
      'reduce()',
      'setTimeout()',
      'addEventListener',
      'localStorage',
      'await',
      'Promise',
      'interface',
      'extends',
      'super',
    ];
    return words[i % words.length];
  }

  getColor(i: number): string {
    const colors = [
      '#64ffda',
      '#ff6b6b',
      '#ffd166',
      '#72f1b8',
      '#a29bfe',
      '#f78fb3',
      '#c3f584',
      '#f5cd79',
      '#81ecec',
      '#fab1a0',
    ];
    return colors[i % colors.length];
  }
}
