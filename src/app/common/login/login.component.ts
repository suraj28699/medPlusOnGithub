import { Component } from '@angular/core';
import { DataSerService } from '../services/data-ser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(){

}

Onsubmit(dt:any){
// console.log("inside submit");
console.log(dt.value);

if(dt.value.eml=="admin"){
  sessionStorage.setItem("admin","true");
}
}

signOut(){
sessionStorage.removeItem("admin");
// sessionStorage.clear();
}





//   private sample:any="this is from login page";

//   constructor(private dataS:DataSerService){

//   }

//   sendData(){
// this.dataS.setData(this.sample);
//   }

}
