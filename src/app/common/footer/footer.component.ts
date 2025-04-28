import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataSerService } from '../services/data-ser.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // @Input() pdata: any;
  // @Output() dfc = new EventEmitter;

  // sampleData = "this is the data from child"
  // viewData:any="data from child to parent using viewchild"

  // constructor() {
  //   console.log("con " + this.pdata);
  // }
  // ngOnInit() {
  //   console.log(this.pdata)
  // }

  // send() {
  //   // alert("send data");
  //   this.dfc.emit(this.sampleData);
  // }

  // test(){
  //   return "hi"
  // }


  // dt:any;
  // constructor(private dataS:DataSerService){
  //   this.getData();
  // }

  // getData(){
  //   this.dataS.getData().subscribe(
  //     (res:any)=>{
  //       this.dt=res;
  //     }
  //   )
  // }



}
