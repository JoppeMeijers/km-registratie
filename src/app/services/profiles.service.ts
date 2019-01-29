import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  profileId;
  uid;
  constructor(private db: AngularFireDatabase) { 
    this.uid =  localStorage.getItem('uid');
  }

  updateName(profile, id){
    console.log(profile);
  
    this.db.object(this.uid + '/profiles/' + id).update({
      id: (id),
      name: (profile.name),
    })
  }

  updateCompany(profile, id){
    console.log(profile);
  
    this.db.object(this.uid + '/profiles/' + id).update({
      id: (id),
      company: (profile.company),
    })
  }

  updateCar(profile, id){
    console.log(profile);
  
    this.db.object(this.uid + '/profiles/' + id).update({
      id: (id),
      car: (profile.car),
    })
  }
}

