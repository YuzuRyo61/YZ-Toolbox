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
  HeroCog,
  HeroMenu,
  HeroExclamationCircle,
  HeroChip,
  HeroDesktopComputer,
  HeroServer,
  HeroIdentification,
  HeroArrowCircleUp,
} from '@ng-icons/heroicons/outline';
import {
  SimpleAngular,
  SimpleTauri,
  SimpleGit,
} from '@ng-icons/simple-icons';
import {SysInfoService} from "./service/sys-info.service";

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
        SimpleAngular,
        SimpleTauri,
        HeroMenu,
        SimpleGit,
        HeroExclamationCircle,
        HeroChip,
        HeroDesktopComputer,
        HeroServer,
        HeroIdentification,
        HeroArrowCircleUp,
      })
  ],
  providers: [
    SysInfoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
