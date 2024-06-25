import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  catFact: string | undefined;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getCatFact();
  }

  getCatFact(): void {
    this.homeService.getCatFact().subscribe(
      (data) => (this.catFact = data.fact),
      (error) => console.error('Error fetching cat fact', error)
    );
  }
}
