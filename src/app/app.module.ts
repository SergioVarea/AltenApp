import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';

// Importar HttpClientModule a partir de Angular 5 en angular 4 utiliza HttpModule
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    InfoPageComponent,
    ResumePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
