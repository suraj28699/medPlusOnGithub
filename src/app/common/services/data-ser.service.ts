import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSerService {


  constructor(private http:HttpClient){

  }

  // for admin crud 
  postAdminAppData(dt:any){
    return this.http.post("http://localhost:3000/appLicenseForAdmin",dt);
  }
  getAdminAppData(){
    return this.http.get("http://localhost:3000/appLicenseForAdmin");
  }
  deleteadminAppData(dt:any){
    return this.http.delete("http://localhost:3000/appLicenseForAdmin/"+dt);
  }
updateAdminAppData(dt:any){
  // console.log(dt.id);
  return this.http.put("http://localhost:3000/appLicenseForAdmin/" +dt.id, dt);
}

// for dpy modal

postDPYModal(dt:any){
return this.http.post("http://localhost:3000/dpyModal",dt);// received data from dpy component
}
getDPYModal(){
return this.http.get("http://localhost:3000/dpyModal");// this data will fetch in aboutDPY component
}

  // private empC: any = new BehaviorSubject(0);
  // private getEmpC = this.empC.asObservable();


  // constructor() {
  //   console.log(typeof this.getEmpC)
  // }

  // setData(dt: any) {
  //   console.log("data received in service = " + dt)
  //   this.empC.next(dt);
  // }
  // getData() {

  //   return this.getEmpC;
  // }

}
