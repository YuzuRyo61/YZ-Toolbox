import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UrlComponent} from "./url.component";
import { UrlDecodeComponent } from './decode/decode.component';
import { UrlEncodeComponent } from './encode/encode.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: UrlComponent,
    children: [
      {
        path: '',
        redirectTo: 'decode',
        pathMatch: 'full',
      },
      {
        path: 'decode',
        component: UrlDecodeComponent,
      },
      {
        path: 'encode',
        component: UrlEncodeComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    UrlComponent,
    UrlDecodeComponent,
    UrlEncodeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule
  ]
})
export class UrlModule { }
