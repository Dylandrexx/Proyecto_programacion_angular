import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AdminComponent } from './features/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminComponent,
    canActivate: [AuthGuard] // Componente protegido por Guard
  },
  { path: '**', redirectTo: 'login' }
];
