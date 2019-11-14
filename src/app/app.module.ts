import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingDtlComponent } from './Component/booking-dtl/booking-dtl.component';
import { SelectRoomComponent } from './Component/select-room/select-room.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingDtlComponent,
    SelectRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
