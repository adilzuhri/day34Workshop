import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="searchTerm" placeholder="Search Giphy">
    <button (click)="searchGiphy()">Search</button>
    <button (click)="clearSearch()">Clear</button>
    <select [(ngModel)]="sortOption">
      <option value="">Sort by</option>
      <option value="rating">Rating</option>
      <option value="date">Date</option>
    </select>
    <div *ngFor="let gif of gifs">
      <img [src]="gif.url">
    </div>
  
})

export class AppComponent {
  searchTerm = '';
  sortOption = '';
  gifs = [];

  constructor(private http: HttpClient) {}

  searchGiphy() {
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=<7Cm6fhf22KYo22Rm7ewofpUtaWPFxaUd>&q=${this.searchTerm}&limit=3`)
      .subscribe(res => {
        this.gifs = res['data'];
        if (this.sortOption === 'rating') {
          this.gifs.sort((a, b) => b.rating - a.rating);
        } else if (this.sortOption === 'date') {
          this.gifs.sort((a, b) => b.import_datetime - a.import_datetime);
        }
      });
  }

  clearSearch() {
    this.searchTerm = '',
    this.gifs = [],
  }
}
