import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  uid;

  constructor(private db: AngularFireDatabase) {
     this.uid =  localStorage.getItem('uid');
   }

  rideId;


 add(newRide){
    this.rideId = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

    this.db.object(this.uid + '/rides/' + this.rideId).set({
      id: (this.rideId),
      date: (newRide.date),
      desc: (newRide.desc),
      from: (newRide.from),
      to: (newRide.to),
      km: (newRide.km),
      isActive: true,
  });
  }


  update(ride, id, date){
    this.db.object(this.uid + '/rides/' + id).update({
      date: (date),
      id: (id),
      isActive: true,
      desc: (ride.desc),
      from: (ride.from),
      to:  (ride.to),
      km: (ride.km)
    })
  }
}
