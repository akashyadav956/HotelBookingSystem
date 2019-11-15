import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SearchModel, Hotel } from '../models';
import { Observable } from 'rxjs';
import { CatalogService } from '../services';

@Injectable({
  providedIn: 'root'
})

export class HotelListResolver implements Resolve<Hotel[]> {
  searchModel: SearchModel;
  constructor(private catalogSvc: CatalogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Hotel[] | Observable<Hotel[]> | Promise<Hotel[]> {

    const fromDate = route.params['fromDate'];
    const toDate = route.params['toDate'];
    const location = route.params['location'];
    const noOfAdult = route.params['noOfAdult'];
    const noOfChildren = route.params['noOfChildren'];
    const noOfRooms = route.params["noOfRooms"];
    return this.catalogSvc.getHotelListByDateAndLocation(fromDate,toDate,location,noOfAdult,noOfChildren,noOfRooms);
  }
}
