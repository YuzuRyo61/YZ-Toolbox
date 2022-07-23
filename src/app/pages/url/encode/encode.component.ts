import { Component, OnInit } from '@angular/core';
import {writeText} from "@tauri-apps/api/clipboard";

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.scss']
})
export class UrlEncodeComponent implements OnInit {
  text: string = '';
  component: boolean = false;
  copiedClipboard: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard(text: string) {
    if (text === '') return;
    writeText(this.encode(text)).then(_ => {
      this.copiedClipboard = true;
    });
  }

  encode(text: string): string {
    if (this.component) {
      return encodeURIComponent(text);
    } else {
      return encodeURI(text);
    }
  }

}
