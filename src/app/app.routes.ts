import { Routes } from '@angular/router';
import { FirstPage } from './login-page/first-page/first-page';
import { DashboardComponent } from './dashboard/dashboard';
import { WateringComponent } from './watering/watering';
import { SystemStatusComponent } from './system-status/system-status';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: FirstPage },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'watering', component: WateringComponent },
  { path: 'system-status', component: SystemStatusComponent },
  { path: '**', redirectTo: '/login' }
];