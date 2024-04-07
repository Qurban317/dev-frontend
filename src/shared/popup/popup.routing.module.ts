import { PopupComponent } from './popup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ResetPasswordGuard } from './reset-password/reset-password.gaurd';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Popup',
    pathMatch: 'full',
  },
  {
    path: 'popup',
    component: PopupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
