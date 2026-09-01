import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard'),
  },
  {
    path: 'about',
    loadComponent: () => import('./about-this-app/about-this-app'),
  },
  {
    path: 'help',
    loadComponent: () => import('./give-me-help/give-me-help').then((m) => m.GiveMeHelp),
  },
  {
    path: '**',
    loadComponent: () => import('./give-me-help/give-me-help').then((m) => m.GiveMeHelp),
  },
];
