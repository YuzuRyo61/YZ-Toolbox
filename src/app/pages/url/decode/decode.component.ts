import { Component, OnInit } from '@angular/core';
import { writeText } from '@tauri-apps/api/clipboard';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.scss']
})
export class UrlDecodeComponent implements OnInit {
  text: string = '';
  component: boolean = false;
  copiedClipboard: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard(text: string) {
    if (text === '') return;
    writeText(this.decode(text)).then(_ => {
      this.copiedClipboard = true;
    });
  }

  decode(text: string): string {
    if (this.component) {
      return decodeURIComponent(text);
    } else {
      return decodeURI(text);
    }
  }

}
