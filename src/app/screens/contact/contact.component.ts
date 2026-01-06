import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, MatIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const params = {
      first_name: this.contactForm.value.firstName,
      last_name: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.isLoading = true;

    emailjs.send(
      'service_zmzayja',
      'template_a430td6',
      params,
      'aFqTqSfmEAG8V-84O'
    ).then(
      () => {
        this.isLoading = false;
        alert('Email sent successfully!');
        this.contactForm.reset();
      },
      (error) => {
        this.isLoading = false;
        console.error('EmailJS error:', error);
        alert('Failed to send email. Please try again.');
      }
    );
  }

}
