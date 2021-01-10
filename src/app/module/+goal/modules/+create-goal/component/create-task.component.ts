import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {AppService} from "../../../../../service/app.service";
import {arrayUpsert} from "@datorama/akita";
import {uuid} from "../../../../../util/uuid";
import {MatDialogRef} from "@angular/material/dialog";

export class CreateTaskErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export enum CreateTaskFormControls {
  TASK_NAME = "taskName",
  TAGS = "tags"
}

type CreateTaskFormValue = Readonly<{
  taskName: string;
  tags: [];
}>

@Component({
  selector: "pl-create-task",
  templateUrl: "create-task.component.html",
  styleUrls: ["create-task.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskComponent implements OnInit {

  public _formGroup: FormGroup;

  public _matcher = new CreateTaskErrorMatcher();

  public _controlNames = CreateTaskFormControls;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<CreateTaskComponent>,
              private appService: AppService) {
  }

  ngOnInit(): void {
    this._formGroup = this.fb.group({
      [CreateTaskFormControls.TASK_NAME]: ['', Validators.required],
      [CreateTaskFormControls.TAGS]: [[]]
    });
  }

  public _createGoal(): void {
    const formValue: CreateTaskFormValue = this._formGroup.value;
    this.appService.pair.store.update(state => {
      return {
        ...state,
        goals: arrayUpsert(state.goals, uuid(), {title: formValue.taskName, tasks: []})
      }
    })
    this.dialogRef.close();
  }

  public _close(): void {
    this.dialogRef.close();
  }

}
