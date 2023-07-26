import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TeamsComponent } from './pages/teams/teams.component';
// component
import { StaffListingComponent } from './components/staff/staff-listing/staff-listing.component';
const routes: Routes = [
  {
  component:AboutUsComponent,
  path:'about-us'
},
{
  component:BlogComponent,
  path:'blog'
},
// StaffListingComponent
{
  component:StaffListingComponent,
  path:'staff'
},
{
  component:ApplyComponent,
  path:'apply'
},
{
  component:LoginComponent,
  path:'login'
},
{
  component:SignupComponent,
  path:'signup'
},
{
  component:HomeComponent,
  path:'home'
},
{
  component:TeamsComponent,
  path:'team'
}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
