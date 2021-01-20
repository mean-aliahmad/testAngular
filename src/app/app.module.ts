import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddFormComponent,
    EditFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, ImageCropperModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
