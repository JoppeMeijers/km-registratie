import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favourite;
  favourites$;
  favouriteId;
  valueFavourite;
  uid;

  constructor(private db: AngularFireDatabase) { 
    this.uid =  localStorage.getItem('uid');
  }

  add(newFavourite){
    this.favouriteId = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

    this.db.object(this.uid + '/favourites/' + this.favouriteId).set({
      id: (this.favouriteId),
      company: (newFavourite.companyName),
      street: (newFavourite.companyStreet),
      postal: (newFavourite.companyCode),
      town: (newFavourite.companyTown),
      isActive: true,
  });
  }



  update(client, id){
    console.log(id);
    this.db.object(this.uid +'/favourites/' + id).update({
      company: (client.companyName),
      id: (id),
      isActive: true,
      postal: (client.companyCode),
      street: (client.companyStreet),
      town:  (client.companyTown)
    })
  }
}
