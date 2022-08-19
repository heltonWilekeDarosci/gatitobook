import { Router } from '@angular/router';
import { ExistingUserService } from './existing-user.service';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { lowerCaseValidator } from './lower-case.validator';
import { sameUserPasswordValidator } from './same-user-password.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private NewUserService: NewUserService,
    private ExistingUserService: ExistingUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      fullName: ['', [ Validators.required, Validators.minLength(4)]],
      userName: ['', [lowerCaseValidator], [this.ExistingUserService.userAlreadyExists()]],
      password: [''],
      },
      {
        validators: [sameUserPasswordValidator],
      }
    );
  }

  sigUp() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.NewUserService.signUpNewUser(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
