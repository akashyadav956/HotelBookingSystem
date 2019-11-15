import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel, SearchModel } from 'src/app/models';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CatalogService } from 'src/app/services';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  search: SearchModel;
  hotelList: Observable<Hotel[]>;
  locations:any[];
  constructor(private route: ActivatedRoute, private router: Router, private catalogSvc: CatalogService) {
    this.search = {
      fromDate: new Date(),
      toDate: new Date,
      LocationId: 0,
      adult: 1,
      children: 0,
      noOfRoom: 1,
      totalNightStay: 0
    }
    this.hotelList = this.route.snapshot.data["hotels"];
  }

  ngOnInit() {
    this.locations = this.catalogSvc.getLocation();
  }


  // calculateDate(dateFrom, dateTo) {
  //   debugger
  //   let days: number = 0;
  //   if (dateFrom && dateTo) {
  //     let diffc = dateFrom.getTime() - dateTo.getTime();
  //     days = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
  //   }
  //   return days;
  // }
}
