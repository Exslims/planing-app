import {Query, Store} from "@datorama/akita";
import {StoreConfigOptions} from "@datorama/akita/src/storeConfig";

export type StorePair<T> = Readonly<{
  store: Store<T>;
  query: Query<T>
}>

export function createStorePair<T>(initialState: T, opt: Partial<StoreConfigOptions>): StorePair<T> {
  const store = new Store<T>(initialState, opt)
  const query = new Query<T>(store);
  return {
    store: store,
    query: query
  };
}
