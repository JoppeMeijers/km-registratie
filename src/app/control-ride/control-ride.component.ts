import { ProfilesService } from './../services/profiles.service';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { RidesService } from './../services/rides.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { unescapeIdentifier } from '@angular/compiler';
import { Observable } from 'rxjs';
import { setCheckNoChangesMode } from '@angular/core/src/render3/state';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-control-ride',
  templateUrl: './control-ride.component.html',
  styleUrls: ['./control-ride.component.css']
})
export class ControlRideComponent implements OnInit {

currentTotalkm;
newTotalkm;

  from;
  to;
  date;
  km;
  desc;
  id;
  uid;


test;
  saveData;

  constructor(private route: ActivatedRoute, private RidesService: RidesService, private router: Router, private _location: Location, private db: AngularFireDatabase, private ProfilesService: ProfilesService) { 
    this.uid = localStorage.getItem('uid');
  
  }

  ngOnInit() {
      this.date = localStorage.getItem('date')
      this.from = localStorage.getItem('from')
      this.to = localStorage.getItem('to')
      this.km = parseInt(localStorage.getItem('km'));
      this.desc = localStorage.getItem('desc');
  }


  backClicked(){
    this._location.back();
  }

  save(from, to, date, km, desc){
   this.saveData = {
    from: from,
    to: to,
    date: date,
    km: km,
    desc: desc,

  }

  this.RidesService.add(this.saveData);
  this.router.navigate(['dashboard']);

 
  }

}
