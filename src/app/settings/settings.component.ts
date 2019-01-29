import { AuthService } from './../services/auth.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ProfilesService } from './../services/profiles.service';

import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @ViewChild("f") f:NgForm;

  name;
  company;
  car;

  profileDataRef: AngularFireList<any>;
  profileData$: Observable<any[]>;
  uid;


  constructor(private ProfilesService: ProfilesService, private db: AngularFireDatabase, public AuthService: AuthService) { 
    this.uid = localStorage.getItem('uid');  
    this.profileDataRef = db.list(this.uid + '/profiles');
    this.profileData$ = this.profileDataRef.valueChanges();
  }

  ngOnInit() {
  }


 




}

