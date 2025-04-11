import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { DataSerService } from '../services/data-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  constructor(private router:Router){
   

  }

  // jump on login page
  goToLogin(){
    this.router.navigateByUrl("login");
  }





//   @ViewChild(FooterComponent) childObj:any;
//   test:any;
//   t:any;
//   public sample1 = "sample data"
//   dataFC: any;

//   dt1:any;

//   constructor(private dataS:DataSerService) {

  
//     console.log("test "+this.test);
//     console.log(this.childObj);

//     this.getDtFService();
//   }

//   ngAfterViewInit(){
//     console.log("inside ngAfterViewInit test "+this.test);
//     console.log(this.childObj.viewData);
//     // this.t=this.childObj.viewData;
//     this.t=this.childObj.viewData;
//     console.log(this.childObj.send())
//   }

//   getData(data: any) {
//     this.dataFC = data;
//   }

//   getDtFService(){
//    this.dataS.getData().subscribe(
//     (res:any)=>{
//       console.log(res);
//       this.dt1=res;
//     },
//     (err:any)=>{
//       console.log(err);
//     }
//    )
//   }

 }
