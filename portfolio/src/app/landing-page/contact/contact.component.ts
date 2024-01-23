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
    this.updateUIOnSend();
    const formData = this.createFormData();
    await this.sendFormData(formData);
    this.setSuccessUI();
    this.resetUI();
  }

  private updateUIOnSend() {
    const sendButton = this.sendButton.nativeElement;
    sendButton.innerText = 'Sending';
    sendButton.style.backgroundColor = 'orange';
    this.disableFormFields();
  }

  private createFormData(): FormData {
    const formData = new FormData();
    formData.append('name', this.nameField.nativeElement.value);
    formData.append('email', this.emailField.nativeElement.value);
    formData.append('message', this.messageField.nativeElement.value);
    return formData;
  }

  private async sendFormData(formData: FormData) {
    await fetch('https://anton-osipov.de/send_mail.php', {
      method: 'post',
      body: formData
    });
  }

  private resetForm() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }

  private setSuccessUI() {
    const sendButton = this.sendButton.nativeElement;
    setTimeout(() => {
      sendButton.innerText = 'Success';
      sendButton.style.backgroundColor = 'green';
      this.resetForm();
    }, 1500);
  }

  private resetUI() {
    setTimeout(() => {
      const sendButton = this.sendButton.nativeElement;
      sendButton.innerText = 'Send message';
      sendButton.style.backgroundColor = '#00BEE8';
      this.enableFormFields();
    }, 3000);
  }

  private disableFormFields() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendButton.nativeElement.disabled = true;
  }

  private enableFormFields() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButton.nativeElement.disabled = false;
  }
}