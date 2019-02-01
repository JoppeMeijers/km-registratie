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

  createProfile(newProfile){
    this.db.object(this.uid + '/login').set({
      loginTimes: "1",
    });

    this.db.object(this.uid + '/profiles/1').set({
      id: ("1"),
      name: (newProfile.name),
      company: (newProfile.company),
      car: (newProfile.car),
      totalKm: (newProfile.km),
      firstLogin: "1",
    });
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

  updateKm(km){
    this.db.object(this.uid + '/profiles/1').update({
      totalKm: km,
    })

  }
}

