import { Component } from '@angular/core';
import { PendingListComponent } from './pending-list/pending-list.component';
import { ChartType, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PendingListComponent, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  chart1 = {
    series: [{ name: 'Recepciones', data: [10, 20, 15, 30, 40] }],
    chart: { type: 'bar' as ChartType, height: 200, width: 350 },
    xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May'] }
  };

  chart2 = {
    series: [80],
    chart: { type: 'radialBar' as ChartType, height: 220 , width: 240},
    labels: ['Conformidad (%)']
  };

  chart3 = {
    series: [{ name: 'Recepciones', data: [120, 100, 90, 80, 70] }],
    chart: { type: 'bar' as ChartType, height: 250, width: 600  },
    xaxis: { categories: ['Proveedor A', 'Proveedor B', 'Proveedor C', 'Proveedor D', 'Proveedor E'] }
  };
}
