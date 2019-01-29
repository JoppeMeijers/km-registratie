import { RidesService } from './../services/rides.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-control-ride',
  templateUrl: './control-ride.component.html',
  styleUrls: ['./control-ride.component.css']
})
export class ControlRideComponent implements OnInit {

  from;
  to;
  date;
  km;
  desc;
  id;
  uid;

  saveData;

  constructor(private route: ActivatedRoute, private RidesService: RidesService, private router: Router, private _location: Location) { }

  ngOnInit() {
      this.date = localStorage.getItem('date')
      this.from = localStorage.getItem('from')
      this.to = localStorage.getItem('to')
      this.km = localStorage.getItem('km');
      this.desc = localStorage.getItem('desc');
  

  }

  backClicked(){
    this._location.back();
  }

  save(from, to, date, km, desc, uid){
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
