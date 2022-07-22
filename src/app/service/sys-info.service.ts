import { Injectable } from '@angular/core';
import {invoke} from "@tauri-apps/api/tauri";

@Injectable({
  providedIn: 'root'
})
export class SysInfoService {

  constructor() { }

  async getData(): Promise<unknown> {
    return await invoke('get_dashboard_data');
  }

  async getUsage(): Promise<unknown> {
    return await invoke('get_dashboard_usage');
  }
}
