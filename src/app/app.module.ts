import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { CityPipe } from './shared/pipes/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { SharedModule } from './shared/shared.module';
import { PreloadAllModules } from '@angular/router';
import { CustomPreloadStrategy } from './shared/preloading/custom-preload-strategy';
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot(
      APP_ROUTES,
      { preloadingStrategy: CustomPreloadStrategy})
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
],
  providers: [
    // { provide: FlightService, useClass: FlightService}
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
