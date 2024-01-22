import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }


  async sendMail() {
    console.log('Sending Mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    // let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    // sendButton.disabled = true;
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://formspree.io/f/mnqejaea',
    {
      method: 'post',
      body: fd
    })
    // const name = this.contactForm.get('name')?.value;
    // const email = this.contactForm.get('email')?.value;
    // const message = this.contactForm.get('message')?.value;

    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('email', email);
    // formData.append('message', message);

    // try {
    //   await this.http.post('https://formspree.io/f/mnqejaea', formData).toPromise();
    //   this.contactForm.reset();
    // } catch (error) {
    // }
  }
}