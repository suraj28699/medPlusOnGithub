import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSerService } from '../../services/data-ser.service';

@Component({
  selector: 'app-eth-h',
  templateUrl: './eth-h.component.html',
  styleUrls: ['./eth-h.component.css']
})
export class EthHComponent {

  bootstrap:any;
constructor(private _dataSer:DataSerService){
  const toastTrigger:any = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  
  if (toastTrigger) {
    const toastBootstrap = this.bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }



}

// for dropdown in modal 
modalClick(){
  // console.log("Inside modal");
  // document.getElementById('ff')?.focus();


}

countries = [
  { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
  { name: 'India', cities: ['Delhi', 'Mumbai', 'Bangalore'] },
  { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal'] }
];

selectedCountry: string = '';
cities: string[] = [];
selectedCity: string = '';

onCountryChange() {
  const selected = this.countries.find(c => c.name === this.selectedCountry);
  this.cities = selected ? selected.cities : [];
  this.selectedCity = '';
}
// modal end 
public cityCountry=new FormGroup({
  fname:new FormControl('',[Validators.required,Validators.maxLength(10)]),
  country:new FormControl('',[Validators.required]),
  city:new FormControl(),

});

public resetting:any;
OnSub(){
  // debugger;
  // console.log(this.cityCountry.value);
  // console.log(this.cityCountry.status);
  this._dataSer.postCC(this.cityCountry.value).subscribe((res:any)=>{
    
  },(error:any)=>console.log(error));


  this.resetting={
fname:'',
country:'',
city:''
}

setTimeout(()=>{
this.cityCountry.setValue(this.resetting);
this.isSub=false;
},100)

}
public isSub:boolean=false;
forValidation(){
    this.isSub=true;
  }

  get f(){
    return this.cityCountry.controls;
  }
}
