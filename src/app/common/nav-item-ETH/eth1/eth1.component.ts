import { Component } from '@angular/core';

@Component({
  selector: 'app-eth1',
  templateUrl: './eth1.component.html',
  styleUrls: ['./eth1.component.css']
})
export class Eth1Component {


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


}
