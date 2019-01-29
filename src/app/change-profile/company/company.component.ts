import { ProfilesService } from './../../services/profiles.service';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @ViewChild("f") f:NgForm;

  id;


  constructor(private route: ActivatedRoute, private ProfilesService: ProfilesService, private _location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
    })
  }

  backClicked(){
    this._location.back();
  }

  updateCompany(updateProfile: HTMLInputElement){
    this.ProfilesService.updateCompany(updateProfile, this.id);
    this.f.resetForm;
    this._location.back();
  }

}
