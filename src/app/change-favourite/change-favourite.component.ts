import { FavouritesService } from './../services/favourites.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-change-favourite',
  templateUrl: './change-favourite.component.html',
  styleUrls: ['./change-favourite.component.css']
})
export class ChangeFavouriteComponent implements OnInit {
change;
  form: FormGroup;

  @ViewChild("f") f:NgForm;
  id;
  constructor(private FavouritesService: FavouritesService, private router: Router, private route: ActivatedRoute,private _location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>{
      this.id = params.get('id');
    });
  }

  backClicked(){
    this._location.back();
  }


  update(updatedFavourite: HTMLInputElement){
    this.FavouritesService.update(updatedFavourite, this.id)
    this.f.resetForm();
    this.router.navigate(['favourite']);
   }

}
