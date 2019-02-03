import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  uid;

  totalKmRef:AngularFireList<any>;
  totalKm$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
     this.uid =  localStorage.getItem('uid');
     }

  rideId;
  addKm;

  newKm;

  totalKm;
  rides;
  uniqueRides = [];


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
  this.countKm();
  }

  firstAdd(newRide){
    this.rideId = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

    this.db.object(this.uid + '/rides/' + this.rideId).set({
      id: (this.rideId),
      km: (newRide.km),
      isActive: true,
  });
  this.countKm();
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
    this.countKm();

  }

  delete(id){
    this.db.object(this.uid + '/rides/' + id).remove();
    this.countKm();
  }

  countKm(){
    this.totalKmRef = this.db.list(this.uid + '/rides');
    this.totalKm$ = this.totalKmRef.valueChanges();
    this.totalKm$.subscribe(res=> this.getAllRides(res));
  }

  getAllRides(res){
    this.rides = res;
    this.rides.forEach(ride =>{
      if(!this.uniqueRides.includes(ride)){
        this.uniqueRides.push(ride.km);
      }
    })
    this.totalKm = this.uniqueRides.reduce(this.sum);

    this.db.object(this.uid + '/profiles/1').update({
      totalKm: (this.totalKm),
    })
    this.uniqueRides =[];
  }

  sum(a, b){
    return a += b;

  }


}
