import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services';
import { Hotel } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  hotelDetail: Hotel;
  locations:any[];
  constructor(private catalogSvc: CatalogService,private activeRoute: ActivatedRoute) { 
   this.locations= this.catalogSvc.getLocation();
  }

  ngOnInit() {
   let hotelId= this.activeRoute.snapshot.data['id']
   // this.hotelDetail = this.catalogSvc.getHotelDetails();
  }

  getLocationName(locationId:number)
  {
    return this.locations.filter(item=> item.id==locationId)[0].name;
  }

}
