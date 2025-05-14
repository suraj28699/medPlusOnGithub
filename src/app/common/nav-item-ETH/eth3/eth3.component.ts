import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-eth3',
  templateUrl: './eth3.component.html',
  styleUrls: ['./eth3.component.css']
})
export class Eth3Component {

  public appList: any = ["Solidworks", "Matlab", "Autodesk Autocad", "Ansys", "Vault"];

  public opco: any = ["Med", "Dpy", "Eth"];

  countries: string[] = [];
  cities: string[] = [];

  countryCityMap: { [key: string]: string[] } = {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    India: ['Delhi', 'Mumbai', 'Bangalore']
  };

  selectedCountry: string = '';
  selectedCity: string = '';

  constructor(){
// document.getElementById('testID')?.focus();
}
click(){
document.getElementById('testID')?.scrollIntoView();

}
  ngOnInit(): void {
    this.countries = Object.keys(this.countryCityMap);
// document.getElementById('testID')?.focus();

  }

  onCountryChange(): void {
    this.cities = this.countryCityMap[this.selectedCountry] || [];
    this.selectedCity = '';
  }


}