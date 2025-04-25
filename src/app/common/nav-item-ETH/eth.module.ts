import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthHComponent } from './eth-h/eth-h.component';
import { Eth1Component } from './eth1/eth1.component';
import { Eth2Component } from './eth2/eth2.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:"",component:EthHComponent},
  {path:"eth1",component:Eth1Component},
  {path:"eth2",component:Eth2Component},

  {path:"**",redirectTo:""}
]

@NgModule({
  declarations: [
    EthHComponent,
    Eth1Component,
    Eth2Component,
    
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ETHModule { }
