import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  eventDate = '';
  message = '';

  submitForm() {
    console.log('Contact form submitted', {
      name: this.name,
      email: this.email,
      eventDate: this.eventDate,
      message: this.message
    });
    alert('Thank you! We will get back to you soon.');
    this.name = '';
    this.email = '';
    this.eventDate = '';
    this.message = '';
  }
}
