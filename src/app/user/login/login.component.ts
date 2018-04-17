import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;
  loginErrorMessage: string;

  isLoading = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginFormErrors = {
      email: {},
      password: {}
    };

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.formValuesChanged();
    this.loginForm.valueChanges.subscribe(() => {
      this.formValuesChanged();
    });
  }

  formValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (this.loginFormErrors.hasOwnProperty(field)) {
        this.loginFormErrors[field] = {};

        const control = this.loginForm.get(field);

        if (control && control.dirty && !control.valid) {
          this.loginFormErrors[field] = control.errors;
        }
      }
    }
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    if (email === 'someone@example.com' && password === 'password') {
      this.userService.signedIn = true;
      this.router.navigate(['pages']);
    } else {
      this.loginErrorMessage = 'Wrong password or email';
    }
  }

  // async login() {

  //   try {
  //     const email = this.loginForm.get('email').value;
  //     const password = this.loginForm.get('password').value;
  //     this.isLoading = true;
  //     const res = await this.userService.login(email, password).toPromise();
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     this.isLoading = false;
  //   }
  // }

  change(e: string) {
    if (!e) {
      this.loginErrorMessage = '';
    }
  }
}
