import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialGlobalModule } from './core/modules/material-global/material-global.module';
import { SampleEmailComponent } from './pages/home/components/dashboard/components/sample-email/sample-email.component';
import { DashboardComponent } from './pages/home/components/dashboard/dashboard.component';
import { NewEmailComponent } from './pages/home/components/new-email/new-email.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NewEmailComponent,
    SampleEmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialGlobalModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
