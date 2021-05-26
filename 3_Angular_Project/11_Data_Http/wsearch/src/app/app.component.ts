import { Component, Injectable, ReflectiveInjector } from '@angular/core';

import { WikipediaService } from './wikipedia.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService) {}

  title = 'wsearch';
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe(response => {
      console.log(response);
    });
  }
}
