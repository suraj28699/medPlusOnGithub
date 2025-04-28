import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpyComponent } from './dpy/dpy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Dpysub1Component } from './dpysub1/dpysub1.component';
import { Dpysub2Component } from './dpysub2/dpysub2.component';
import { Dpysub3Component } from './dpysub3/dpysub3.component';
import { AboutDPYComponent } from './about-dpy/about-dpy.component';

const routes:Routes=[
  {path:'',component:DpyComponent},
  {path:'dpy1',component:Dpysub1Component},
  {path:'dpy2',component:Dpysub2Component},
  {path:'dpy3',component:Dpysub3Component},
  {path:'aboutDPY',component:AboutDPYComponent},




]

@NgModule({
  declarations: [
    DpyComponent,
    Dpysub1Component,
    Dpysub2Component,
    Dpysub3Component,
    AboutDPYComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)]
  ]
})
export class NavItemModule { }
