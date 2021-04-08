import { Component, OnInit } from '@angular/core';

// import user-service
import { UserServiceService } from '../../user-services/user-service.service';

// import form control
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { confirmPasswordValidator } from '../../user-custom-validation/password.validator';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  constructor(private _userService: UserServiceService, 
              private formBuilder: FormBuilder,
              private router: Router
  ) { }

  userForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email:['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required]],
    phone: [''],
    city: [''],
    country: ['']
  }, {
    validator: confirmPasswordValidator
  });

  alreadyUsedThisEmail:boolean = true;

  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confirm() {
    return this.userForm.get('confirm');
  }
  get phone() {
    return this.userForm.get('phone');
  }
  get city() {
    return this.userForm.get('city');
  }
  get country() {
    return this.userForm.get('country');
  }

  
  registrationFormReset() {
    this.userForm.setValue({
      name: '',
      email: '',
      password: '',
      confirm: '',
      phone: '',
      city: '',
      country: ''
    })
  }


  ngOnInit(): void {
    console.log(this.userForm.value);
    
  }
  onClick(event) {
    this._userService.onClick(event);
  }

  onSubmitForRegisterUser() {
    console.log(this.userForm.value);
    console.log(this.alreadyUsedThisEmail);
    
    if (this.userForm.valid) {
      this._userService.registerUser(this.userForm.value)
      .subscribe(
        res => {
          console.log("POST completed succesfully. The response received " + res);
          this.userForm.reset();
          this.router.navigate(['/login']);
        },
        error => {
          console.log("POST failed with error " + JSON.stringify(error));
          // this.userForm.reset();
          console.log("Email is allready used");
          this.alreadyUsedThisEmail = false;
        },
        () => {
          console.log("POST Completed");
        }
      );
    }
    else {
      // console.log(this.userForm);
      let key = Object.keys(this.userForm.controls);
      console.log(key);

      key.filter(data => {
        // console.log(data);
        let control = this.userForm.controls[data];
        // console.log(control);
        if (control.errors !== null) {
          control.markAsTouched();
        }
      })
      
    }
  }
  onReset() {
    this.registrationFormReset();
  }


}
