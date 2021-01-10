import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AssignTagControlModule} from "../../../shared/assign-tag-control/assign-tag-control.module";
import {CreateGoalComponent} from "./create-goal.component";
import {CreateTaskComponent} from "./component/create-task.component";

const routes: Routes = [
  {
    path: '',
    component: CreateGoalComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AssignTagControlModule
  ],
  exports: [CreateGoalComponent, RouterModule],
  declarations: [CreateGoalComponent, CreateTaskComponent],
  providers: []
})
export class CreateGoalModule {
}
