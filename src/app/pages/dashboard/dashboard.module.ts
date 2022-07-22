import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent,
    }]),
    CommonModule
  ]
})
export class DashboardModule { }
