import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <header>
      <section class="hero-header">
        <h1>About the Organization</h1>
        <h2>Learn how the team and committee leadership are shaping the world of conferences, get the latest conference <br> news and updates on our blog, and contact us for guidance.</h2>
        <button>Learn More</button>
      </section>
    </header>
    <section class="about">
      <h1>About</h1>
      <p>We believe in transparency, cooperation globally, and the free exchange of talent and ideas. A forum for the sharing of these technical and humanitarian discussions is given for meetings, conferences and other events. We are also committed to creating a secure, constructive and supportive atmosphere for all participants in conferences, activities and meetings who participate in these discussions with us.</p>
      <button (click)="handleButtonClick()">Click here to get a FREE Gift!</button>
      <p>Conferences are a part of the legacy of this organization and continue today to be a catalyst for creativity. We are committed to developing strategies that support and expand the conference activities throughout the world.</p>
    </section>
    <br>

  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {
  handleButtonClick() {
    console.log("Claim your free gift!");
  }
}
