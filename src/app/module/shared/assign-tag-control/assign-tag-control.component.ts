import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Tag} from "../../../type/tag.type";
import {AppService} from "../../../service/app.service";

@Component({
  selector: "pl-assign-tag-control",
  templateUrl: "assign-tag-control.component.html",
  styleUrls: ["assign-tag-control.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AssignTagControlComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignTagControlComponent implements OnInit, ControlValueAccessor {

  public _items = this.appService.pair.query.select(state => state.tags);

  public _value: Tag[] = [];

  // @ts-ignore
  private onChange: (items: Tag[]) => void;
  // @ts-ignore
  private onTouched: () => void;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: (items: Tag[]) => void): void {
    this.onChange = fn;
  }

  public writeValue(value: Tag[]): void {
    if (!value) {
      return;
    }
    this._value = value;
  }

}
