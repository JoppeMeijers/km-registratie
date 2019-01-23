import { RouterModule, Router } from '@angular/router';
import { RidesService } from './../services/rides.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.css']
})
export class AddRideComponent implements OnInit {
  @ViewChild("f") f:NgForm;
  submittedForm: "bedankt voor het invullen";


  constructor(private RidesService: RidesService,private router: Router) { }

  ngOnInit() {
  }

  set(newRide: HTMLInputElement){
    this.f.resetForm();
    this.router.navigate(['/control-ride', newRide.date, newRide.from, newRide.to, newRide.km, newRide.desc]);
  }

}
