import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ AngularFireModule} from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SettingsComponent } from './settings/settings.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { ControlRideComponent } from './control-ride/control-ride.component';
import { DayOverviewComponent } from './day-overview/day-overview.component';
import { OverviewChangeComponent } from './overview-change/overview-change.component';
import { AddFavouriteComponent } from './add-favourite/add-favourite.component';
import { ChangeFavouriteComponent } from './change-favourite/change-favourite.component';
import { ChangeSettingsComponent } from './change-settings/change-settings.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OverviewComponent,
    FavouriteComponent,
    SettingsComponent,
    AddRideComponent,
    ControlRideComponent,
    DayOverviewComponent,
    OverviewChangeComponent,
    AddFavouriteComponent,
    ChangeFavouriteComponent,
    ChangeSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: DashboardComponent},
      {path: 'overview', component: OverviewComponent},
      {path: 'add', component: AddRideComponent},
      {path: 'favourite', component: FavouriteComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'control-ride/:date/:from/:to/:km/:desc', component: ControlRideComponent},
    ]),
    FormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
