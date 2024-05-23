import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { JoinUsComponent } from '../join-us/join-us.component';
import { AboutComponent } from '../about/about.component';
import { PartnersComponent } from '../partners/partners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    JoinUsComponent,
    AboutComponent,
    PartnersComponent
  ],
  template: `
    <header>
      <section class="hero-header">
        <h1>Research Conferences</h1>
        <h2>Join our online events this 2021!</h2>
        <button>Early Bird Registration</button>
      </section>
    </header>
    <section>
      <h1>Join our Research Conferences around the Globe!</h1>
    </section>
    <section class="results">
    <app-housing-location
      *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation">
    </app-housing-location>
    </section>
    <app-partners></app-partners>
    <app-about></app-about>
    <section class="haha">
      <h1>Join Our Mailing List</h1>
      <h2>Join and meet thousands academicians around the globe and stay updated!</h2>
      <button>Click here to JOIN!</button>
    </section>
    <app-join-us></app-join-us>

  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}