import { Component, OnInit } from '@angular/core';

// import user-service
import { UserServiceService } from '../../user-services/user-service.service';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserServiceService, 
              private formBuilder: FormBuilder,
              private router: Router
  ) { }

  invalidEmailPassword:boolean;
  logedInPerson:string;

  loginForm = this.formBuilder.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
  });

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  ngOnInit(): void {
    this.invalidEmailPassword=true;
    this.logedInPerson="Login";
  }

  onClick(event) {
    this._userService.onClick(event);
  }

  onSubmitForLoginUser() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    
    
    if (this.loginForm.valid) {
      this._userService.loginUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log("Login successful " + res.name);
          this.logedInPerson=res.name;
          this.router.navigate(['/home']);
        },
        error => {
          console.log("Login Failed", error);
          this.invalidEmailPassword=false;
        },
        () => {
          console.log("Login POST completed"); 
        }
      )
    }
    else {
      let key = Object.keys(this.loginForm.controls);
      key.filter(data => {
        let control = this.loginForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
        }
      })
    }
  }
}
