import { Component, OnInit, OnDestroy } from '@angular/core';
import {SysInfoService} from "../../service/sys-info.service";
import {DashboardData} from "../../interface/dashboard-data";
import {DashboardUsage} from "../../interface/dashboard-usage";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  data?: DashboardData;
  usage?: DashboardUsage;
  private interval?: any

  constructor(
    private sis: SysInfoService,
  ) { }

  usageUpdate() {
    this.sis.getUsage().then(usage => {
      this.usage = usage as DashboardUsage;
    });
  }

  ngOnInit(): void {
    this.sis.getData().then(data => {
      this.data = data as DashboardData;
    });
    this.usageUpdate();
    this.interval = setInterval(() => {
      this.usageUpdate();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }

  mathFloor(num: number): number {
    return Math.floor(num);
  }
}
