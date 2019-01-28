import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  allRidesref: AngularFireList<any>;
  allRides$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {

    this.allRidesref = db.list('/rides');
    this.allRides$ = this.allRidesref.valueChanges();
    this.allRides$.subscribe(res=> console.log(res));
  
  }

  ngOnInit() {
  }

}
