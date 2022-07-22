import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { NgIconsModule } from '@ng-icons/core';
import {
  HeroHome,
  HeroLink,
  HeroInformationCircle,
  HeroCog
} from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      NgIconsModule.withIcons({
        HeroHome,
        HeroLink,
        HeroInformationCircle,
        HeroCog,
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
