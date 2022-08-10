import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.user, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (error) => {
        alert('Usuário ou senha inválidos!');
        console.log(error);
      }
    );
  }
}
