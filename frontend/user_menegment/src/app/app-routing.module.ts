import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminBlanceComponent } from './admin-blance/admin-blance.component';
import { AdminMissionComponent } from './admin-mission/admin-mission.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UserFilesComponent } from './user-files/user-files.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
    },
    {
      path: 'admin',
      component: AdminHomeComponent
      },
      {
        path: 'admin-users',
        component: AdminUsersComponent
        },
    {
    path: 'sign',
    component: SignUpComponent
    },
    {
      path: 'balance',
      component: AdminBlanceComponent
      },
      {
        path: 'mission',
        component: AdminMissionComponent
        },
        {
          path: 'user',
          component: UserComponent
          },
          {
            path: 'file',
            component: UserFilesComponent
            },
          {
            path: 'user-details/:id',
            component: UserDetailsComponent
            },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
