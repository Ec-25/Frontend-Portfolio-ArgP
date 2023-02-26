import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { AuhtService } from 'src/app/service/auht.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUser!: LoginUser;
  username: string = "";
  password: string = "";
  roles: string[] = [];
  errMsg!: string;

  constructor(private tokenService: TokenService, private authService: AuhtService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin() {
    if (this.username != "" && this.password != "") {
      this.loginUser = new LoginUser(this.username, this.password);
      this.authService.login(this.loginUser).subscribe(data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(this.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsg = err.error;
        console.log(this.errMsg);
        alert("Usuario o Contraseña Incorrectos, vuelva a intentar");
      })
    } else if (this.username == "" && this.password == "") {
      alert("Los campos no pueden estar vacios")
    } else if (this.username == "") {
      alert("El Nombre no puede estar Vacio")
    } else if (this.password == "") {
      alert("La Contraseña no puede estar Vacia")
    }
  }
}
