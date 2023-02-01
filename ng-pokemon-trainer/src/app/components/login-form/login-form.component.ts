import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer.model';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  //DI Dependecy injection
  constructor(private readonly loginService: LoginService) {}
  public loginSubmit(loginForm: NgForm): void 
  {
    //get username
    const {username} = loginForm.value;
    
    this.loginService.login(username)
      .subscribe
      ({
        next: (trainer: Trainer) => 
        {

        },
        error: () =>
        {

        }
      })  
  }

}
