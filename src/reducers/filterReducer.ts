import { Filter, FilterAction, FilterActionType } from "../types/filter";
import { ICoffee } from "../types";

export function filterReducer(
  filter: Filter<ICoffee>,
  action: FilterAction<ICoffee>,
): Filter<ICoffee> {
  switch (action.type) {
    case FilterActionType.FILTER_ALL: {
      return {
        ...filter,
        filterType: FilterActionType.FILTER_ALL,
        list: action.currentList,
      };
    }
    case FilterActionType.FILTER_AVAILABLE: {
      return {
        ...filter,
        filterType: FilterActionType.FILTER_AVAILABLE,
        list: action.currentList.filter((item) => item.available),
      };
    }
    default: {
      return filter;
    }
  }
}
