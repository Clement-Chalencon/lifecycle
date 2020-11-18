import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddItemComponent } from './additem/add-item.component';
import { DisplayListComponent } from './display/display-list/display-list.component';
import { DisplayCardComponent } from './display/display-card/display-card.component';
import { ErrorComponent } from './error/error/error.component';
import { ErrorMessageComponent } from './error/error-message/error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddItemComponent,
    DisplayListComponent,
    DisplayCardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddItemComponent,
    DisplayListComponent,
    DisplayCardComponent,
    ErrorComponent,
    ErrorMessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
