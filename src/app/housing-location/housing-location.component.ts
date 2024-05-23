import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo">
    <h2 class="listing-heading">{{ housingLocation.city }}</h2>
    <p class="listing-location">{{housingLocation.desc }}</p>
    <li class="listing-info">{{ housingLocation.l1}}</li>
    <li class="listing-info">{{ housingLocation.l2}}</li>
    <li class="listing-info">{{ housingLocation.l3}}</li>
    <li class="listing-lm">Learn More</li>
  </section>
  <br>
  <br>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
