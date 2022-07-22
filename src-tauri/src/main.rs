#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::{thread, time};
use serde::{ Deserialize, Serialize };
use sysinfo::{CpuExt, System, SystemExt};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_dashboard_data,
            get_dashboard_usage,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[derive(Serialize, Deserialize)]
struct DashboardData {
    cpu_brand: String,
    total_memory: u64,
    os_name: Option<String>,
    hostname: Option<String>,
}

#[derive(Serialize, Deserialize)]
struct DashboardUsage {
    cpu: f32,
    memory: f32,
}

#[tauri::command]
fn get_dashboard_data() -> DashboardData {
    let sys = System::new_all();
    DashboardData {
        cpu_brand: sys.global_cpu_info().brand().to_string(),
        total_memory: sys.total_memory(),
        os_name: sys.long_os_version(),
        hostname: sys.host_name(),
    }
}

#[tauri::command]
fn get_dashboard_usage() -> DashboardUsage {
    let mut sys = System::new();
    sys.refresh_system();
    thread::sleep(time::Duration::from_millis(200));
    sys.refresh_cpu();

    DashboardUsage {
        cpu: sys.global_cpu_info().cpu_usage(),
        memory: sys.used_memory() as f32 / sys.total_memory() as f32 * 100.0,
    }
}
