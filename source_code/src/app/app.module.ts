import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// shared module
import { SharedMainModule } from './sharedModules/shared-main.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgParticlesModule } from "ng-particles";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedMainModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
