import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  template: `
  <main>
  <header>
      <div>
        <nav>
          <a [routerLink]="['/home']" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a>
          <a [routerLink]="['/partners']" routerLinkActive="active" ariaCurrentWhenActive="page">Our Partners</a>
          <a [routerLink]="['/about']" routerLinkActive="active" ariaCurrentWhenActive="page">About the Organization</a>
          <a [routerLink]="['/join-us']" routerLinkActive="active" ariaCurrentWhenActive="page">Join Us!</a>
        </nav>
      </div>
    </header>
    <router-outlet></router-outlet>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim-midterm';
}
