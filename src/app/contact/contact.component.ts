import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  sendMail() {
    const url = '/api/contact';
    this.http.post(url, this.formData).subscribe({
      next: () => {
        alert('Message sent!');
        this.formData = { name: '', email: '', message: '' };
      },
      error: () => {
        alert('Failed to send message.');
      }
    });
  }
}
