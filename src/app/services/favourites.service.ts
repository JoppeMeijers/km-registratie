import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favouriteId;

  constructor(private db: AngularFireDatabase) { }

  add(newFavourite){
    this.favouriteId = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

    this.db.object('/favourites/' + this.favouriteId).set({
      id: (this.favouriteId),
      company: (newFavourite.companyName),
      street: (newFavourite.companyStreet),
      postal: (newFavourite.companyCode),
      town: (newFavourite.companyTown),
      isActive: true,
  });
  }
}
