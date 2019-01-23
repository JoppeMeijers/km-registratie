import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  constructor(private db: AngularFireDatabase) { }

  rideId;


 add(newRide){
    this.rideId = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

    this.db.object('/rides/' + this.rideId).set({
      id: (this.rideId),
      date: (newRide.date),
      desc: (newRide.desc),
      from: (newRide.from),
      to: (newRide.to),
      km: (newRide.km),
      isActive: true,
  });
  }
}
