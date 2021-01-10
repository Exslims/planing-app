import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {AppService} from "../../../../service/app.service";
import {Router} from "@angular/router";
import {arrayUpsert} from "@datorama/akita";
import {uuid} from "../../../../util/uuid";
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskComponent} from "./component/create-task.component";

export class CreateGoalErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: "pl-create-goal",
  templateUrl: "create-goal.component.html",
  styleUrls: ["create-goal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateGoalComponent implements OnInit {

  public _formControl: FormControl = new FormControl("", Validators.required)

  public _matcher = new CreateGoalErrorMatcher();


  constructor(private fb: FormBuilder,
              private dialogService: MatDialog,
              private router: Router,
              private appService: AppService) {
  }

  ngOnInit(): void {
  }

  public _back(): void {
    this.router.navigate(["/goals/list"]);
  }

  public _createGoal(): void {
    this.appService.pair.store.update(state => {
      return {
        ...state,
        goals: arrayUpsert(state.goals, uuid(), {title: this._formControl.value, tasks: []})
      }
    })
    this.router.navigate(["/goals/list"]);
  }

  public _openCreateTask(): void {
    this.dialogService.open(CreateTaskComponent, {width: "600px"}).afterClosed();
  }
}
