import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {GoalsComponent} from "./goals.component";

const routes: Routes = [
  {
    path: '',
    component: GoalsComponent,
    children: [
      {
        path: '',
        redirectTo: `list`,
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: () => import('./modules/+goals-list/goals-list.module').then(m => m.GoalsListModule),
        data: {
          state: 'list',
        },
      },
      {
        path: 'create',
        loadChildren: () => import('./modules/+create-goal/create-goal.module').then(m => m.CreateGoalModule),
        data: {
          state: 'create',
        },
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [GoalsComponent, RouterModule],
  declarations: [GoalsComponent],
  providers: []
})
export class GoalsModule {
}
