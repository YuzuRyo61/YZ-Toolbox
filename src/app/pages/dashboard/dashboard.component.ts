import { Component, OnInit } from '@angular/core';
import {SysInfoService} from "../../service/sys-info.service";
import {DashboardData} from "../../interface/dashboard-data";
import {DashboardUsage} from "../../interface/dashboard-usage";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data?: DashboardData;
  usage?: DashboardUsage;

  constructor(
    private sis: SysInfoService,
  ) { }

  cpuUsageUpdate() {
    this.sis.getUsage().then(usage => {
      this.usage = usage as DashboardUsage;
    });
  }

  ngOnInit(): void {
    this.sis.getData().then(data => {
      this.data = data as DashboardData;
    });
    this.cpuUsageUpdate();
    setInterval(() => {
      this.cpuUsageUpdate();
    }, 1000);
  }

}
