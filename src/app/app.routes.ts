import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

export const routeConfig: Routes = [ // Change to routeConfig
  { path: 'home', component: HomeComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join-us', component: JoinUsComponent },
];
