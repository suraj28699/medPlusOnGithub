import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { DpyComponent } from './common/nav-item/dpy/dpy.component';
import { CanActGuard } from './common/Guards/can-act.guard';
import { AdminComponent } from './common/admin/admin.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dpy", component:DpyComponent},
{path:"login",component:LoginComponent},
{path:"admin",component:AdminComponent,canActivate:[CanActGuard]},

  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
