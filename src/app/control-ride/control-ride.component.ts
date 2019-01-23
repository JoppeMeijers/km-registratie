import { RidesService } from './../services/rides.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

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

  saveData;

  constructor(private route: ActivatedRoute, private RidesService: RidesService, private router: Router, private _location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>{
      this.date = params.get('date');
      this.from = params.get('from');
      this.to = params.get('to');
      this.km = params.get('km');
      this.desc = params.get('desc');
    })
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
    this.router.navigate(['/']);
   }

}
