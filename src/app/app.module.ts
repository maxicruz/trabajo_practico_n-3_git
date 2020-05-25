import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgxDataTableModule} from "angular-9-datatable";
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto4Component } from './components/punto4/punto4.component';
import { HeaderComponent } from './components/layout/header.component';
import { FooterComponent } from './components/layout/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    Punto4Component,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxDataTableModule,
    AlifeFileToBase64Module,
    ToastrModule.forRoot({
      closeButton:true,
      timeOut:2000,
      maxOpened:1,
      autoDismiss:true,
      progressBar:true
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
