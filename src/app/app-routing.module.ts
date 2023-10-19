import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RoutesEnum } from './constants/routes'

const routes: Routes = [
  {
    path: RoutesEnum.Pending,
    loadComponent: () => import('@modules/pending/pending-routing.module')
  },
  {
    path: RoutesEnum.Current,
    loadComponent: () => import('@modules/current/current-routing.module')
  },
  {
    path: RoutesEnum.Completed,
    loadComponent: () => import('@modules/completed/completed-routing.module')
  },
  {
    path: RoutesEnum.Stats,
    loadComponent: () => import('@modules/stats/stats-routing.module')
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
