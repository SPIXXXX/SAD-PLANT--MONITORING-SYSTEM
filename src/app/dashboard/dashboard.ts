import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private timeInterval: any;
  private charts: Chart[] = [];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.updateTime();
    this.timeInterval = setInterval(() => this.updateTime(), 1000);
    this.initCharts();
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
    this.charts.forEach(chart => chart.destroy());
  }

  private updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }

  private initCharts() {
    const chartConfigs = [
      { id: 'soilChart', color: '#30DA27', data: [30, 40, 35, 45, 50] },
      { id: 'tempChart', color: '#30DA27', data: [22, 24, 23, 25, 26] },
      { id: 'waterChart', color: '#1B66F2', data: [60, 50, 55, 65, 70] },
      { id: 'humidityChart', color: '#9747FF', data: [45, 50, 48, 55, 60] },
      { id: 'lightChart', color: '#DAC100', data: [500, 550, 600, 580, 620] }
    ];

    chartConfigs.forEach(config => {
      const ctx = document.getElementById(config.id) as HTMLCanvasElement;
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
              data: config.data,
              fill: true,
              backgroundColor: config.color + '33',
              borderColor: config.color,
              borderWidth: 3,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            },
            scales: {
              y: { beginAtZero: true, grid: { display: false }, ticks: { display: false } },
              x: { grid: { display: false }, ticks: { display: false } }
            }
          }
        });
        this.charts.push(chart);
      }
    });
  }
}