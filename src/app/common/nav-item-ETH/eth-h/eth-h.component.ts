import { Component } from '@angular/core';

@Component({
  selector: 'app-eth-h',
  templateUrl: './eth-h.component.html',
  styleUrls: ['./eth-h.component.css']
})
export class EthHComponent {

  bootstrap:any;
constructor(){
  const toastTrigger:any = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  
  if (toastTrigger) {
    const toastBootstrap = this.bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }

}
  
}
