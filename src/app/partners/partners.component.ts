import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <section class="hero-header">
        <h1>Our Partners</h1>
        <h2>You can achieve a very impressive effect by using our animated navbar, which is transparent on start, and <br> change the color after the scroll.</h2>
        <button>Become a Sponsor</button>
      </section>
    </header>
    <section>
      <h1>Below are our Corporate Partners</h1>
    </section>
    <br>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Trademark</th>
          <th>Sponsorship</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let partner of partners">
          <td>{{ partner.company }}</td>
          <td><img [src]="partner.trademark" alt="{{ partner.company }} Logo"></td>
          <td>{{ partner.sponsorship }}</td>
          <td><a class="view-website" (click)="openWebsite(partner.website)">View Website</a></td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
  `,
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partners = [
    {
      company: 'Microsoft',
      trademark: 'https://miro.medium.com/v2/resize:fit:1400/1*MxZpRFN3hnZrCC05s1q73A.png',
      sponsorship: 'Platinum',
      website: 'https://www.microsoft.com'
    },
    {
      company: 'Apple, Inc.',
      trademark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png',
      sponsorship: 'Gold',
      website: 'https://www.apple.com'
    },
    {
      company: 'Amazon',
      trademark: 'https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg',
      sponsorship: 'Silver',
      website: 'https://www.amazon.com'
    },
    {
      company: 'Google, Inc.',
      trademark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
      sponsorship: 'Bronze',
      website: 'https://www.google.com'
    }
  ];

  openWebsite(url: string) {
    window.open(url, '_blank');
  }
}
