import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDtlComponent } from './Component/booking-dtl/booking-dtl.component';
import { SelectRoomComponent } from './Component/select-room/select-room.component';


const routes: Routes = [
  { path:"", component:BookingDtlComponent},
  { path:"reviewBooking", component:SelectRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
