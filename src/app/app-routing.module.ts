import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplyComponent } from './pages/apply/apply.component';
const routes: Routes = [
  {
  component:AboutUsComponent,
  path:'about-us'
},
{
  component:BlogComponent,
  path:'blog'
},
{
  component:ApplyComponent,
  path:'apply'
},
{
  component:HomeComponent,
  path:'home'
}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
