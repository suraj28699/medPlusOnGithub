import { Component } from '@angular/core';
import { DataSerService } from '../services/data-ser.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  public appList: any = ["Solidworks", "Autocad", "Matlab", "A"];
  public locList: any = ["India", "United State", "United Kingdom", "Mexico", "Rassia"];

  public appForAdminData: any = [];

  constructor(private dataSer: DataSerService) {

    // getData function calling
    this.getData();


    // clear admin details and ask to login again 
    setTimeout(() => {
      // alert("if you leave admin page you need to login again as admin");
      sessionStorage.removeItem("admin");
      // sessionStorage.clear();
    }, 1000)
  }

  // form cruid
  // postData
  onSub(dt: any) {
    console.log(dt.value);
    this.dataSer.postAdminAppData(dt.value).subscribe(
      (res: any) => {
        this.getData();
      }
    ), (err: any) => console.log(err);
  }
  // getData
  getData() {
    this.dataSer.getAdminAppData().subscribe(
      (res: any) => {
        // console.log(res);
        this.appForAdminData = res;
      }
    ), (err: any) => console.log(err);
  }

  // edit
  public selectedData: any = {
    id: "",
    uname: '',
    eml: "",
    app: '',
    license: '',
    loc: '',

  }
  edit(dt: any) {
    // console.log(dt);
    this.selectedData.id = dt.id;
    this.selectedData.uname = dt.uname;
    this.selectedData.eml = dt.eml;
    this.selectedData.app = dt.app;
    this.selectedData.license = dt.license;
    this.selectedData.loc = dt.loc;

  }
  // delete
  delete(dt: any) {
    // console.log(dt.id);
    this.dataSer.deleteadminAppData(dt.id).subscribe(
      (res: any) => {
        this.getData();
      }
    ), (err: any) => console.log(err);
  }
  // update
  update(dt: any) {
    console.log(dt.value.id);
    this.dataSer.updateAdminAppData(dt.value).subscribe(
      (res:any)=>{
        this.getData();
      },
      (err:any)=>{
        console.log(err);
      }
    )

  }

}
