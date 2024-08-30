export enum FilterActionType {
  FILTER_ALL = "FILTER_ALL",
  FILTER_AVAILABLE = "FILTER_AVAILABLE",
}

export type FilterType =
  | FilterActionType.FILTER_ALL
  | FilterActionType.FILTER_AVAILABLE;

export interface Filter<T> {
  filterType: FilterType;
  list: T[];
}

export type FilterAction<T> = {
  type: FilterType;
  currentList: T[];
};
