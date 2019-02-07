import { FavouritesService } from './../services/favourites.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {

  @ViewChild("f") f: NgForm;

  constructor(private FavouritesService: FavouritesService, private router: Router,private _location: Location) { }

  ngOnInit() {
  }

  save(newFavourite: HTMLInputElement){
    this.FavouritesService.add(newFavourite);
    this.f.resetForm();
    this.router.navigate(['favourite']);
   }

   backClicked(){
    this._location.back();
  }
   

}
