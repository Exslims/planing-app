import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {AppService} from "../../../../service/app.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {CreateGoalComponent} from "../+create-goal/create-goal.component";
import {Router} from "@angular/router";

@Component({
  selector: "pl-goals-list",
  templateUrl: "goals-list.component.html",
  styleUrls: ["goals-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsListComponent implements OnInit {

  public _goals$ = this.appService.pair.query.select(state => state.goals);

  constructor(private appService: AppService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private dialogService: MatDialog,
              private router: Router) {
    iconRegistry.addSvgIcon(
      'arrow-right',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/arrow_right_alt-24px.svg'));
  }

  ngOnInit(): void {
  }

  public _openCreateGoalDialog() {
    this.router.navigate(["/goals/create"]);
  }
}
