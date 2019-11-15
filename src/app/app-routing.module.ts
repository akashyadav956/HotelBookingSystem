import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent,RegisterComponent,HotelListComponent,LoginComponent, SummeryComponent, BookingComponent} from './components';
import { HotelListResolver } from './resolvers/hotel-list.resolver';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';


const routes : Routes = [
   {path :"home", component:HomeComponent},
   {path :"login", component:LoginComponent},
   {path :"register", component:RegisterComponent},
   {
       path :"hotel/list",
       component:HotelListComponent,
       resolve: {
        hotels: HotelListResolver
    }
    },
   {path :"hotel/detail/:id", component: HotelDetailComponent},
   {path :"booking/detail", component: BookingComponent},
   {path :"", redirectTo:"hotel/list", pathMatch:"full"}
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}