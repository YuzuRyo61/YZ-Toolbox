import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {UrlComponent} from "./url.component";



@NgModule({
  declarations: [
    UrlComponent,
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: UrlComponent,
    }])
  ]
})
export class UrlModule { }
