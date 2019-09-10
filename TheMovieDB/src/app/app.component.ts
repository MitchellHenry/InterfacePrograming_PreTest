import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jurrasic World';
  URL = 'https://images-na.ssl-images-amazon.com/images/I/81bEk4cFbHL._SY445_.jpg';
  Rating = 7;
  ShortDesc = 'A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.';
  ReleaseDate = '21 July 2018';
  Runtime = 130;
}
