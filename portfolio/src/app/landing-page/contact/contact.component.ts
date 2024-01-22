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
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    sendButton.innerText = 'Mail sent';
    sendButton.style.backgroundColor = 'green';
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    // let fd = new FormData();
    // fd.append('name', nameField.value);
    // fd.append('email', emailField.value);
    // fd.append('message', messageField.value);
    // await fetch('https://anton-osipov.de/send_mail.php',
    //   {
    //     method: 'post',
    //     body: fd
    //   })
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    setTimeout(() => {
      sendButton.innerText = 'Send message';
      sendButton.style.backgroundColor = '#00BEE8';
      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
    }, 2000);
  }
}