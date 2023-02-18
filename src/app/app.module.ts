import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { CarouselDealsComponent } from './common/carousel-deals/carousel-deals.component';
import { PeopleCardComponent } from './common/people-card/people-card.component';
import { BannerComponent } from './common/banner/banner.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ProductComponent } from './pages/product/product.component';
import { RecentlyViewedCardComponent } from './common/recently-viewed-card/recently-viewed-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    CarouselDealsComponent,
    PeopleCardComponent,
    BannerComponent,
    ProductComponent,
    RecentlyViewedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
