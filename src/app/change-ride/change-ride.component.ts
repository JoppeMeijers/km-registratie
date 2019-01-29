import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { RidesService } from './../services/rides.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-ride',
  templateUrl: './change-ride.component.html',
  styleUrls: ['./change-ride.component.css']
})
export class ChangeRideComponent implements OnInit {
  @ViewChild("f") f:NgForm;
  id;
  date;

  favouritesRef: AngularFireList<any>;
  favourites$: Observable<any[]>;


  

  constructor(private db: AngularFireDatabase ,private router: Router,private route: ActivatedRoute, private _location: Location, private RidesService: RidesService) { 

    this.favouritesRef = db.list('/favourites');
    this.favourites$ = this.favouritesRef.valueChanges();

  }

  ngOnInit() {

    this.route.paramMap
    .subscribe(params =>{
      this.id = params.get('id');
      this.date = params.get('date');
    })

  }

  backClicked(){
    this._location.back();
  }

  update(updateRide: HTMLInputElement){
    this.RidesService.update(updateRide, this.id, this.date);
    this.f.resetForm();
    this._location.back();
  }




}