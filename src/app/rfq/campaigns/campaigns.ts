import { Component, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [],
  templateUrl: './campaigns.html',
  styleUrl: './campaigns.scss',
})
export class Campaigns implements AfterViewInit {

  // 🔹 DATA (your campaigns list)
  campaigns = [
    {
      id: 102030,
      start: '12/03/2026',
      end: '15/03/2026',
      budget: 10000,
      rfq: 10,
      reach: 100,
      ctr: 100,
      views: 200,
      interests: 50
    },
    {
      id: 102031,
      start: '12/03/2026',
      end: '15/03/2026',
      budget: 10000,
      rfq: 10,
      reach: 100,
      ctr: 100,
      views: 200,
      interests: 50
    },
    {
      id: 102032,
      start: '12/03/2026',
      end: '15/03/2026',
      budget: 10000,
      rfq: 10,
      reach: 100,
      ctr: 100,
      views: 200,
      interests: 50
    },
    {
      id: 102033,
      start: '12/03/2026',
      end: '15/03/2026',
      budget: 10000,
      rfq: 10,
      reach: 100,
      ctr: 100,
      views: 200,
      interests: 50
    }
  ];

  // 🔹 Lifecycle
  ngAfterViewInit() {
    this.loadActivityChart();
    this.loadPerformanceChart();
  }

  // 🔹 ACTIVITY GRAPH (multi-line)
  loadActivityChart() {
    const chartDom = document.getElementById('activityChart');
    if (!chartDom) return;

    const chart = echarts.init(chartDom);

    chart.setOption({
      tooltip: {
        trigger: 'axis'
      },

      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },

      xAxis: {
        type: 'category',
        data: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
        axisLine: { show: false }
      },

      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: { color: '#eee' }
        }
      },

      series: [
        {
          data: [0,500,1200,300,200,250,50,100,500,400,200,0],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { color: '#2e5bff', width: 2 }
        },
        {
          data: [0,200,500,100,80,120,60,70,200,300,100,0],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { color: '#4f7c7c', width: 2 }
        },
        {
          data: [0,100,300,1500,200,180,90,60,100,500,800,0],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { color: '#ff9800', width: 2 }
        }
      ]
    });
  }

  // 🔹 PERFORMANCE GRAPH (area chart)
  loadPerformanceChart() {
    const chartDom = document.getElementById('performanceChart');
    if (!chartDom) return;

    const chart = echarts.init(chartDom);

    chart.setOption({
      tooltip: {
        trigger: 'axis'
      },

      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },

      xAxis: {
        type: 'category',
        data: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
        axisLine: { show: false }
      },

      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: { color: '#eee' }
        }
      },

      series: [
        {
          data: [2000,3000,2500,3200,4200,3500,3800,4100,3600,3400,3000,4000],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: { color: '#4f7c7c', width: 2 },

          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(79,124,124,0.4)' },
              { offset: 1, color: 'rgba(79,124,124,0.05)' }
            ])
          }
        }
      ]
    });
  }

}