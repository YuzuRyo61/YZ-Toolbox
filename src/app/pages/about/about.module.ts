import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import {RouterModule, Routes} from "@angular/router";
import {NgIconsModule} from "@ng-icons/core";
import {CommonModule} from "@angular/common";
import { VersionComponent } from './version/version.component';
import { LicenseComponent } from './license/license.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: '',
        component: VersionComponent,
      },
      {
        path: 'license',
        component: LicenseComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    AboutComponent,
    VersionComponent,
    LicenseComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgIconsModule,
    CommonModule
  ]
})
export class AboutModule { }
