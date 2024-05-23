import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
    <section class="listing-apply">
      <hr>
      <br>
      <h1 class="section-heading">Fill the form below:</h1>
      <hr>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name:</label>
        <input id="first-name" type="text" formControlName="firstName">
        <label for="last-name">Last Name:</label>
        <input id="last-name" type="text" formControlName="lastName">
        <p>Fullname: {{ applyForm.get('firstName')?.value }} {{ applyForm.get('lastName')?.value }}</p>
        <br>
        <label for="email">Enter Email Address:</label>
        <input id="email" type="email" formControlName="email">
        <p>Email: {{ applyForm.get('email')?.value }}</p>

        <br>
        <label for="institution">Enter Institution/Affiliation:</label>
        <input id="institution" type="text" formControlName="institution">
        <p>Academic Institution: {{ applyForm.get('institution')?.value }}</p>
        <br>
        <button type="submit" class="primary" (click)="joinNow()">Join now</button>
      </form>
    </section>
  </article>
  `,
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    institution: new FormControl('')
  });
  housingService: any;
  housingLocation: any;

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.institution ?? ''
    );
  }

  joinNow() {
    alert('You have joined!');
  }

}