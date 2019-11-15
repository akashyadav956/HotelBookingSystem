import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hotel, SearchModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  readonly API_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  hotel: Hotel[] = [
    {
      name: "Radision Hotel",
      locationId: 1,
      location: "Pune",
      price: 3500,
      imageUrl: "assets/images/image.jpg"
    },
    {
      name: "Taj Hotel",
      locationId: 2,
      location: "Mumbai",
      price: 8000,
      imageUrl: "assets/images/image1.jpg"
    },
    {
      name: "River view Hotel",
      locationId: 1,
      location: "Pune",
      price: 6500,
      imageUrl: "assets/images/image2.jpg"
    },
    {
      name: "Lamon Tree Hotel",
      locationId: 1,
      location: "Pune",
      price: 5500,
      imageUrl: "assets/images/image3.jpg"
    },
    {
      name: "OYO",
      locationId: 2,
      location: "mumbai",
      price: 7500,
      imageUrl: "assets/images/image4.jpg"
    }
  ]

  locaton = [
    {
      id: 1,
      name: "Mumbai"
    },
    {
      id: 2,
      name: "Pune"
    },
    {
      id: 3,
      name: "Nagpur"
    },
    {
      id: 4,
      name: "Hyderbad"
    },
    {
      id: 5,
      name: "Bengaluru"
    }
  ]

  getHotelListByDateAndLocation(fromDate: Date, toDate: Date, location: number, noOfAdult: number, noOfChildren: number, noOfRooms: number): Observable<Hotel[]> {
    //let url =`hotel/${fromDate}`;
    //return this.http.get<Hotel[]>(`${this.API_URL}/${url}`);
    return of(this.hotel);
  }

  getLocation() {
    return this.locaton;
  }
}
