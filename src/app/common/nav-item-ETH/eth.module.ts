import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthHComponent } from './eth-h/eth-h.component';
import { Eth1Component } from './eth1/eth1.component';
import { Eth2Component } from './eth2/eth2.component';
import { RouterModule, Routes } from '@angular/router';
import { Eth3Component } from './eth3/eth3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {path:"",component:EthHComponent},
  {path:"eth1",component:Eth1Component},
  {path:"eth2",component:Eth2Component},
  {path:"eth3",component:Eth3Component},

  {path:"**",redirectTo:""}
]

@NgModule({
  declarations: [
    EthHComponent,
    Eth1Component,
    Eth2Component,
    Eth3Component,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ETHModule { }
