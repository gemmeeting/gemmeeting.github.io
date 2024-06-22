import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// shared module
import { SharedMainModule } from './sharedModules/shared-main.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgParticlesModule } from 'ng-particles';
import { TabEquipaComponent } from './pages/tab-equipa/tab-equipa.component';
import { TabProgramaComponent } from './pages/tab-programa/tab-programa.component';
import { TabInscricoesComponent } from './pages/tab-inscricoes/tab-inscricoes.component';
import { TabResumosComponent } from './pages/tab-resumos/tab-resumos.component';
import { TabFaqsComponent } from './pages/tab-faqs/tab-faqs.component';
import { TabPatrociniosComponent } from './pages/tab-patrocinios/tab-patrocinios.component';
import { TabContactosComponent } from './pages/tab-contactos/tab-contactos.component';
import { ContentNovidadesEmBreveComponent } from './pages/content-novidades-em-breve/content-novidades-em-breve.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomepageComponent, TabEquipaComponent, TabProgramaComponent, TabInscricoesComponent, TabResumosComponent, TabFaqsComponent, TabPatrociniosComponent, TabContactosComponent, ContentNovidadesEmBreveComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FontAwesomeModule, SharedMainModule, NgParticlesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
