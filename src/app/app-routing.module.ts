import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CancelUserComponent } from './admin/cancel-user/cancel-user.component';
import { CancelFlightComponent } from './admin/cancel-flight/cancel-flight.component';
import { CreateFlightComponent } from './admin/create-flight/create-flight.component';
import { BookFlightsComponent } from './admin/book-flights/book-flights.component';
import { ViewFlightsComponent } from './admin/view-flights/view-flights.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { ViewBookingsComponent } from './admin/view-bookings/view-bookings.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminChildrenGuard } from './admin-children.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  {path: 'admin', component: AdminComponent, 
    canActivate: [AdminGuardGuard],
    children:[
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'login',
        canActivateChild: [AdminChildrenGuard],
        children: [
          {path: 'create-flight', component: CreateFlightComponent},
          {path: 'cancel-flight', component: CancelFlightComponent},
          {path: 'cancel-user', component: CancelUserComponent},
          {path: 'view-users', component: ViewUsersComponent},
          {path: 'view-flights', component: ViewFlightsComponent},
          {path: 'view-bookings', component: ViewBookingsComponent}, 
          {path: 'book-flights', component: BookFlightsComponent},
        ]
      }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
  AdminComponent, 
  BookFlightsComponent,
  CreateFlightComponent,
  CancelUserComponent,
  CancelFlightComponent,
  ViewFlightsComponent,
  ViewUsersComponent,
  ViewBookingsComponent
];