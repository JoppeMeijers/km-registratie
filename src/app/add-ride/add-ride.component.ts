import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { RouterModule, Router } from '@angular/router';
import { RidesService } from './../services/rides.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.css']
})
export class AddRideComponent implements OnInit {
  @ViewChild("f") f:NgForm;
  submittedForm: "bedankt voor het invullen";


  favouritesRef: AngularFireList<any>; 
  favourites$: Observable<any[]>;

  constructor(private RidesService: RidesService,private router: Router, private db: AngularFireDatabase) {
    this.favouritesRef = db.list('/favourites');
    this.favourites$ = this.favouritesRef.valueChanges();
    this.favourites$.subscribe(res=> console.log(res));
   }

  ngOnInit() {
  }

  set(newRide){
    localStorage.setItem('from', newRide.from);
    localStorage.setItem('to', newRide.to);
    localStorage.setItem('date', newRide.date);
    localStorage.setItem('km', newRide.km);
    localStorage.setItem('desc', newRide.desc);
    this.f.resetForm();
    this.router.navigate(['control-ride']);
  }

}
