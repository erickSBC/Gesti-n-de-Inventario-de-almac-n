import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes')
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m=>m.DashboardComponent) 
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m=>m.AdminComponent) 
    }
];
