import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favouritesRef: AngularFireList<any>; 
  favourites$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.favouritesRef = db.list('/favourites');
    this.favourites$ = this.favouritesRef.valueChanges();
    this.favourites$.subscribe(res=> console.log(res));

   }

  ngOnInit() {
  }

}
