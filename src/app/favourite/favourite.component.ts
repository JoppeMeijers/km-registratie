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
  uid;

  constructor(private db: AngularFireDatabase) {
    this.uid = localStorage.getItem('uid');  
    this.favouritesRef = db.list(this.uid + '/favourites');
    this.favourites$ = this.favouritesRef.valueChanges();
    this.favourites$.subscribe(res=> console.log(res));

   }

  ngOnInit() {
  }

}
