import ROUTES from './routes';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: ROUTES.LOGIN, component: LoginComponent },
  { path: ROUTES.REGISTER, component: RegisterComponent },
  { path: '', redirectTo: '/' + ROUTES.LOGIN, pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
