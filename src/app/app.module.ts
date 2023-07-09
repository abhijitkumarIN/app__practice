import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ButtonComponent } from './components/button/button.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModulesComponent } from './components/material/material.modules/material.modules.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TeamsComponent } from './pages/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutUsComponent,
    BlogComponent,
    ButtonComponent,
    ApplyComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    TeamsComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModulesComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
