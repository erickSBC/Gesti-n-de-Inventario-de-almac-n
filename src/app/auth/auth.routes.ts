import { Routes } from "@angular/router";
export default[
    {
        path: 'log-in',
        loadComponent: ()=> import('../auth/log-in/log-in.component').then(m=>m.LogInComponent)
    },
    {
        path: 'sign-up',
        loadComponent: ()=> import('../auth/sign-up/sign-up.component').then(m=>m.SignUpComponent)
    }
] as Routes;