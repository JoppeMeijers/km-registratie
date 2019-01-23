import { FavouritesService } from './../services/favourites.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {

  @ViewChild("f") f: NgForm;

  constructor(private FavouritesService: FavouritesService) { }

  ngOnInit() {
  }

  save(newFavourite: HTMLInputElement){
    this.FavouritesService.add(newFavourite);
    this.f.resetForm();
   }
   

}
