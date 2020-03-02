import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { routes } from './apps.routes';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { AboutComponent } from './about/about.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product.details/product.details.component';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './search.pipe';
import { LoopNumberPipe } from './loop-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormsComponent,
    About1Component,
    About2Component,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    SearchComponent,
    SearchPipe,
    LoopNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
