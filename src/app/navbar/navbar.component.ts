import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firstLogin;


  constructor(private AuthService: AuthService) { 
    this.firstLogin = localStorage.getItem('firstLogin');
    console.log(this.firstLogin);

  }

  ngOnInit() {
  }

}
