import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  contactForm: FormGroup;

  constructor(private http: HttpClient) {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  async sendMail() {
    const name = this.contactForm.get('name')?.value;
    const email = this.contactForm.get('email')?.value;
    const message = this.contactForm.get('message')?.value;
    if (this.contactForm.invalid) {
      if (!name.trim()) {
        window.alert('Please enter your name.');
        return;
      }
      if (!email.trim()) {
        window.alert('Please enter your email.');
        return;
      }
      if (!this.isValidEmail(email)) {
        window.alert('Please enter a valid email address.');
        return;
      }
      if (!message.trim()) {
        window.alert('Please enter a message.');
        return;
      }
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    try {
      await this.http.post('https://formspree.io/f/mnqejaea', formData).toPromise();
      this.contactForm.reset();
      window.alert('Email was sent');
    } catch (error) {
      window.alert('Please enter a valid email address.');
    }
  }

  isValidEmail(email: string): boolean {
    return email.includes('@');
  }
}