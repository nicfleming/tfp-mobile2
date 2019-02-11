import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

var nameText = document.querySelector(".nameText");
var emailText = document.querySelector(".emailText");
var passwordText = document.querySelector(".passwordText");
var roleText = document.querySelector(".roleText");
var phoneText = document.querySelector(".phoneText");

var nameInput = document.querySelector(".name");
var emailInput = document.querySelector(".email");
var passwordInput = document.querySelector(".password");
var roleInput = document.querySelector(".role");
var phoneInput = document.querySelector(".phone");

// nameInput.addEventListener("focus", () => {
//   nameText.innerHTML = "Full Name";
// })





@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registrationForm =  this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required],
    phone: ['', Validators.required]
  })

  constructor(private fb: FormBuilder ) { }

  onSubmit() {
    console.warn("submitted");
    console.warn(this.registrationForm.value);
    let userRegistration = {
      name: this.registrationForm.value.name,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      role: this.registrationForm.value.role,
      phone: this.registrationForm.value.phone
    };
    console.log(userRegistration);
  }

  focusInput(input){
    input.focus();
  }
  ngOnInit() {
  }
  logClick() { 
    console.log("click!");
  }
  showLabel(labelName) {
    // do something to show the label above the input box
    if(labelName == "name"){
      nameText.innerHTML = "Full Name";
    }
  }

}
