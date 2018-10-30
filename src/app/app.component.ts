import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Star Wars-api';
  _dropdown: string = '';
  _searchField: string = '';
  data: object = {};
  people: object = [];
  display: object = {};

  constructor(
    private http: HttpClient) {}
 
  onEnter(dropdown: string, searchField: string) { 
    this._dropdown = dropdown.valueOf(); 
    this._searchField = searchField;

    return (this.http.get(`https://swapi.co/api/${ this._dropdown }/?search=${ this._searchField }`))
    .subscribe(people => {
    this.people = people;
    })
  }
}

