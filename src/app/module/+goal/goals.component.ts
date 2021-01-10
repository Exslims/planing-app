import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "pl-goals",
  templateUrl: "goals.component.html",
  styleUrls: ["goals.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent {
}
