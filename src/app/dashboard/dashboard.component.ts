import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carDataRef: AngularFireList<any>;
  carData$: Observable<any[]>;

  uid;

  constructor(private db: AngularFireDatabase) { 
    this.uid = localStorage.getItem('uid');
    this.carDataRef = db.list(this.uid + '/profiles');
    this.carData$ = this.carDataRef.valueChanges();

   
   

  }

  ngOnInit() {
  }

}
