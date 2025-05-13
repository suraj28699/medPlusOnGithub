import { Component } from '@angular/core';

@Component({
  selector: 'app-eth2',
  templateUrl: './eth2.component.html',
  styleUrls: ['./eth2.component.css']
})
export class Eth2Component {


  public a:boolean=true;
  public b:any="hi"
  public c=11;
  private d=[1,2,3,4,5];

  cl(){

    debugger;
    console.log(this.a);
    console.log(this.b)
    

    console.log(this.c)
    console.log(this.d)


  }


  constructor(){
    setTimeout(()=>{
      alert("hi")
    },3000)
  }


}
