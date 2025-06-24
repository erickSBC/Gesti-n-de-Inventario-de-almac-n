import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HistoryReceptionComponent } from './reception/history-reception/history-reception.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes')
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m=>m.DashboardComponent),
        canActivate: [authGuard],
    },
   
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m=>m.AdminComponent),
        canActivate: [authGuard]  
    },
    {
        path: 'dashboard/receptions',
        loadComponent: () => import('./reception/history-reception/history-reception.component').then(m => m.HistoryReceptionComponent)
    },
    { path: '**', redirectTo: '/auth/log-in', pathMatch: 'full' }
];
