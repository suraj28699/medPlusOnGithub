import { Component } from '@angular/core';
import { DataSerService } from '../../services/data-ser.service';

@Component({
  selector: 'app-about-dpy',
  templateUrl: './about-dpy.component.html',
  styleUrls: ['./about-dpy.component.css']
})
export class AboutDPYComponent {

  public mobCityArray: any = [];

  constructor(private dataS: DataSerService) {
this.getMobCity();

  }

  getMobCity() {
    this.dataS.getDPYModal().subscribe(
      (res: any) => {
        this.mobCityArray = res;
      }
    )
  }
}
