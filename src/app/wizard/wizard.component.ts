import { ProfilesService } from './../services/profiles.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  @ViewChild("f") f:NgForm;

  constructor(private db: AngularFireDatabase, private ProfilesService: ProfilesService, private router: Router) { }

  ngOnInit() {
  }

  createProfile(newProfile: HTMLInputElement){
    this.ProfilesService.createProfile(newProfile);
    this.f.resetForm();
    this.router.navigate(['dashboard']);
  }

}
