import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  dates = [];
  sorting;

  uniqueDates = [];
  UniqueDatesFormat;

  january;


  allRidesref: AngularFireList<any>;
  allRides$: Observable<any[]>;

  constructor(private db: AngularFireDatabase, public datepipe: DatePipe) {

    this.allRidesref = db.list('/rides');
    this.allRides$ = this.allRidesref.valueChanges();
    this.allRides$.subscribe(res=> this.getAllUnique(res));
  
  }

  getAllUnique(res){
    this.dates = res;

    this.dates.forEach(date =>{
      if(this.uniqueDates.indexOf(date.date) === -1){
          this.uniqueDates.push(date.date);
      }
    })
    this.uniqueDates.sort();

    

    console.log(this.uniqueDates);
   
  }

  ngOnInit() {
  }

}
