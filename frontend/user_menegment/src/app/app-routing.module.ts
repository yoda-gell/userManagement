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
import { authGuard } from './auth.guard';
import {adminGuard} from './admin.guard'

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
      component: AdminHomeComponent,
      canActivate:[authGuard,adminGuard]
      },
      {
        path: 'admin-users',
        component: AdminUsersComponent,
        canActivate:[authGuard,adminGuard]
        },
    {
    path: 'sign',
    component: SignUpComponent,
    canActivate:[authGuard]
    },
    {
      path: 'balance',
      component: AdminBlanceComponent,
      canActivate:[authGuard,adminGuard]
      },
      {
        path: 'mission',
        component: AdminMissionComponent,
        canActivate:[authGuard,adminGuard]
        },
        {
          path: 'user',
          component: UserComponent,
          canActivate:[authGuard]
          },
          {
            path: 'file',
            component: UserFilesComponent,
            canActivate:[authGuard]
            },
          {
            path: 'user-details/:id',
            component: UserDetailsComponent,
            canActivate:[authGuard,adminGuard]
            },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
