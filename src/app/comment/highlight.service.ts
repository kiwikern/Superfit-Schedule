import { Injectable } from '@angular/core';
import { Highlight } from './highlights.enum';

@Injectable()
export class HighlightService {

  highlightMapping = {};

  constructor() {
    this.highlightMapping[Highlight.Encouragement] = {icon: 'mood', text: 'Party'};
    this.highlightMapping[Highlight.Exhausting] = {icon: 'fitness_center', text: 'Härte'};
    this.highlightMapping[Highlight.Healthy] = {icon: 'favorite', text: 'Gesund'};
    this.highlightMapping[Highlight.Music] = {icon: 'music_note', text: 'Musik'};
    this.highlightMapping[Highlight.Technique] = {icon: 'school', text: 'Technik'};
  }

  getAllHighlights() {
    return Object.keys(this.highlightMapping);
  }

  getHighlightText(highlight: Highlight): string {
    return this.highlightMapping[highlight].text;
  }

  getHighlightIcon(highlight: Highlight): string {
    return this.highlightMapping[highlight].icon;
  }

}
