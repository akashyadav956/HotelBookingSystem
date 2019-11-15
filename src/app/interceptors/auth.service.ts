import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {

  constructor(private userSvc: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //if (this.userSvc.User) {
      if (req.url.endsWith("/api/catalog/product") && req.method == "POST") {
        //when add product with image, we don't need to set content type as json
        req = req.clone({
          setHeaders: {
            "Accept": "application/json",
           // "Authorization": `Bearer ${this.userSvc.User.token}`
          }
        });
      }
      else {
        req = req.clone({
          setHeaders: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        //    "Authorization": `Bearer ${this.userSvc.User.token}`
          }
        });

      }
  //  }

    return next.handle(req);
  }
}
