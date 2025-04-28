import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSerService } from '../../services/data-ser.service';

@Component({
  selector: 'app-dpy',
  templateUrl: './dpy.component.html',
  styleUrls: ['./dpy.component.css']
})
export class DpyComponent {


public city:any=["Pune","Kolhapur","Delhi","Chennai","Goa","Hydrabad","Mumbai"];
public locList: any = ["India", "United State", "United Kingdom", "Mexico", "Rassia","China","Shreelanka","Italy","France"];

constructor( private dataS:DataSerService){
  
}

protected mobLocation=new FormGroup({
  mob:new FormControl('',[Validators.required]),
  city:new FormControl(),

})

onSub(){
console.log(this.mobLocation.value.city);
this.dataS.postDPYModal(this.mobLocation.value).subscribe();

}


}
