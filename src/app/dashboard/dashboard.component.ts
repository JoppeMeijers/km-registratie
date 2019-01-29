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

  constructor(private db: AngularFireDatabase) { 

    this.carDataRef = db.list('/profiles');
    this.carData$ = this.carDataRef.valueChanges();
  }

  ngOnInit() {
  }

}
