import {Injectable} from "@angular/core";
import {createStorePair} from "../util/create-store-pair";
import {Goal} from "../type/goal.type";
import {Tag} from "../type/tag.type";
import {uuid} from "../util/uuid";

export type AppState = Readonly<{
  goals: Goal[];
  tags: Tag[];
}>

function createInitialState(): AppState {
  return {
    goals: [
      {
        id: uuid(),
        title: "Test Goal 1",
        tasks: []
      },
      {
        id: uuid(),
        title: "Test Goal 2",
        tasks: []
      },
      {
        id: uuid(),
        title: "Test Goal 3",
        tasks: []
      },
    ],
    tags: [
      {
        title: "Янв-Март"
      },
      {
        title: "Янв"
      }
    ]
  };
}

@Injectable({
  providedIn: "root"
})
export class AppService {
  public pair = createStorePair(createInitialState(), {name: "app"});

}
