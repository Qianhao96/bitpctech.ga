import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


//Every api need the token to authenticate the user, or use (auth.interceptor)
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(
                tap(
                    suc => { },
                    err => {
                        if (err.status == 401) {
                            localStorage.removeItem('token')
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