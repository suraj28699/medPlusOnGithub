import { Component } from '@angular/core';
import { DataSerService } from '../../services/data-ser.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eth1',
  templateUrl: './eth1.component.html',
  styleUrls: ['./eth1.component.css']
})
export class Eth1Component {
  
  public cityCountryDataFromEthH:any=[];

  countries = [
    { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
    { name: 'India', cities: ['Delhi', 'Mumbai', 'Bangalore'] },
    { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane'] }
  ];

  selectedCountry: string = '';
  cities: string[] = [];
  selectedCity: string = '';

  onCountryChange() {
    const country = this.countries.find(c => c.name === this.selectedCountry);
    this.cities = country ? country.cities : [];
    this.selectedCity = '';
  }

  constructor(private _dataS:DataSerService){
this.getDataCC();
  }
  getDataCC(){
    this._dataS.getCC().subscribe((res:any)=>{
      // console.log(res);
      this.cityCountryDataFromEthH=res;
    })
  }
  update(){

  }


  // form 
  public cityCountry=new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    country:new FormControl('',[Validators.required]),
    city:new FormControl(""),
    id:new FormControl(),
  
  });
  
  public resetting:any;
  updateRecord(dt:any){
    // debugger;
    console.log(dt.value);
    // console.log(this.cityCountry.status);
    this._dataS.putCC(dt.value).subscribe((res:any)=>{
      this.getDataCC();
    },(error:any)=>console.log(error));
  
  
    this.resetting={
  fname:'',
  country:'',
  city:'',
  id:''
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
  
edit(i:any){
  // console.log(i);
  this.cityCountry.setValue(i);
}
del(dt:any){
  // console.log("inside del")
  // console.log(dt.id);

  this._dataS.deleteCC(dt.id).subscribe((res:any)=>{
    this.getDataCC();
  },(err:any)=>console.log(err));
}

}
