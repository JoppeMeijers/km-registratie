import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profileId;
  constructor(private db: AngularFireDatabase) { }

  updateName(profile, id){
    console.log(profile);
  
    this.db.object('/profiles/' + id).update({
      id: (id),
      name: (profile.name),
    })
  }

  updateCompany(profile, id){
    console.log(profile);
  
    this.db.object('/profiles/' + id).update({
      id: (id),
      company: (profile.company),
    })
  }

  updateCar(profile, id){
    console.log(profile);
  
    this.db.object('/profiles/' + id).update({
      id: (id),
      car: (profile.car),
    })
  }
}

