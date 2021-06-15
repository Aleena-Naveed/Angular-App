import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadmaterialComponent } from './uploadmaterial/uploadmaterial.component';
import { DeletematerialComponent } from './deletematerial/deletematerial.component';
import { RatematerialComponent } from './ratematerial/ratematerial.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UploadmaterialComponent,
    DeletematerialComponent,
    RatematerialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
