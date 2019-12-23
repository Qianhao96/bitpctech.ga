import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


//Every api need the token to authenticate the user, or use (auth.interceptor)
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private toastrService: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') != null) {
            const clonedReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type':  'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                  })
            });
            return next.handle(clonedReq).pipe(
                tap(
                    suc => { },
                    err => {
                        if (err.status == 401) {
                            localStorage.removeItem('token')
                            this.toastrService.warning('Your session is expired, please login again.');
                            this.router.navigate(['/user/login']);
                        }
                        else if(err.status == 403){
                            this.router.navigate(['/forbidden']);
                        }
                    }
                )
            )
        }
        else
            return next.handle(req.clone());
    };
}