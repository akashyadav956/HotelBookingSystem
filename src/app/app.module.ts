import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  BookingHistoryComponent,
  ReviewComponent,
  HotelListComponent,
  ReviewListComponent,
  BookingComponent,
  SummeryComponent
} from './components';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BookingHistoryComponent,
    ReviewComponent,
    HotelListComponent,
    ReviewListComponent,
    BookingComponent,
    SummeryComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
