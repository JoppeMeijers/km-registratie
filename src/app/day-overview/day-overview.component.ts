import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-day-overview',
  templateUrl: './day-overview.component.html',
  styleUrls: ['./day-overview.component.css']
})
export class DayOverviewComponent implements OnInit {
  day;

  allRidesDayref: AngularFireList<any>;
  allRidesDay$: Observable<any[]>;


  constructor(private route: ActivatedRoute, private _location: Location, private db: AngularFireDatabase) { 
      this.route.paramMap.subscribe(params =>{
        this.day = params.get('date');
      });


    this.allRidesDayref = db.list('/rides');
    this.allRidesDay$ = this.allRidesDayref.valueChanges();
    this.allRidesDay$.subscribe(res=> console.log(res));
  }

  ngOnInit() {
  }

  backClicked(){
    this._location.back();
  }

}
