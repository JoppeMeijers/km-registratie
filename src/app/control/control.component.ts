import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

    uid;

  loginRef: AngularFireList <any>;
  login$: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.uid = localStorage.getItem('uid');
    this.loginRef = db.list(this.uid + '/login');
    this.login$ = this.loginRef.valueChanges();
    this.login$.subscribe(res=> this.checkLogin(res));


   }

  ngOnInit() {
  }

  checkLogin(res){
   if(res >= 1){
   
    this.router.navigate(['dashboard']);
    }

    if(res < 1){
      this.router.navigate(['wizard']);
    }
  }


}
