import { Component, Input } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent { 

  @Input() profileForm = new FormGroup({
    firstName: new FormControl('', {validators: [Validators.minLength(1)]}),
    lastName: new FormControl('', Validators.minLength(1)),
    profession: new FormControl('', Validators.minLength(1)),
    country: new FormControl('', Validators.minLength(1)),
    city: new FormControl('', Validators.minLength(1)),
    pincode: new FormControl(0,{validators:[Validators.pattern('[0-9]{3,7}')]}),
    email: new FormControl('', Validators.email),
    mobileNumber: new FormControl(0,{validators:[Validators.pattern('[0-9]{3,11}')]} ),
  });
  nextAction(){
    console.log(this.profileForm.valid);
  }
}
