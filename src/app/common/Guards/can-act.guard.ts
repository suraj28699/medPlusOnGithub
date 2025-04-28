import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActGuard implements CanActivate {

  private login_flag: boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var userName = sessionStorage.getItem('admin')
    // console.log("Inside guard =" + userName);
    if (userName == "true") {
      // console.log(userName);
      this.login_flag = true;
    }else{
      // alert("plese sign is as admin");
      this.login_flag=false;
    }
    // return this.login_flag;
    return true;
  }

}
