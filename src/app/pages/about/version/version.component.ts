import {Component, OnInit, VERSION} from '@angular/core';
import {getName, getTauriVersion} from "@tauri-apps/api/app";
import packageJson from "../../../../../package.json";

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  name = getName();
  tauriVersion = getTauriVersion();

  get version(): string {
    return packageJson.version;
  }

  get repositoryUrl(): string {
    return packageJson.repository.url;
  }

  get repositoryFeedback(): string {
    return packageJson.bugs.url;
  }

  get angularVersion(): string {
    return VERSION.full;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
