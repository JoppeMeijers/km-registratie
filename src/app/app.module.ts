import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard.ts.guard';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import{ AngularFireModule} from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';



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
import { AddFavouriteComponent } from './add-favourite/add-favourite.component';
import { ChangeFavouriteComponent } from './change-favourite/change-favourite.component';
import { ChangeSettingsComponent } from './change-settings/change-settings.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';


import { ChangeRideComponent } from './change-ride/change-ride.component';
import { DatePipe } from '@angular/common';
import { NameComponent } from './change-profile/name/name.component';
import { CompanyComponent } from './change-profile/company/company.component';
import { CarComponent } from './change-profile/car/car.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { ControlComponent } from './control/control.component';
import { WizardComponent } from './wizard/wizard.component';



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
    AddFavouriteComponent,
    ChangeFavouriteComponent,
    ChangeSettingsComponent,
    ChangeRideComponent,
    NameComponent,
    CompanyComponent,
    CarComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    ControlComponent,
    WizardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
      { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
      { path: 'forget-password', component: ForgetPasswordComponent, canActivate: [SecureInnerPagesGuard] },
      { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
      { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'control', component: ControlComponent, canActivate: [AuthGuard]},
      {path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]},
      {path: 'add', component: AddRideComponent, canActivate: [AuthGuard]},
      {path: 'favourite', component: FavouriteComponent, canActivate: [AuthGuard]},
      {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
      {path: 'control-ride', component: ControlRideComponent, canActivate: [AuthGuard]},
      {path: 'add-favourite', component: AddFavouriteComponent, canActivate: [AuthGuard]},
      {path: 'change-favourite/:id/:company/:postal/:street/:town', component: ChangeFavouriteComponent, canActivate: [AuthGuard]},
      {path: 'day-overview/:date', component: DayOverviewComponent, canActivate: [AuthGuard]},
      {path: 'change-ride/:id/:date/:km', component: ChangeRideComponent, canActivate: [AuthGuard]},
      {path: 'change-name/:id', component: NameComponent, canActivate: [AuthGuard]},
      {path: 'change-company/:id', component: CompanyComponent, canActivate: [AuthGuard]},
      {path: 'change-car/:id', component: CarComponent, canActivate: [AuthGuard]},
      {path: 'wizard', component: WizardComponent, canActivate: [AuthGuard]},
    ]),
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDatepickerModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [DatePipe, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
