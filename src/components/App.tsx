import React from "react";
import Background from "./Background";
import FilterableCoffeeList from "./FilterableCoffeeList";
import Filters from "./Filters";
import Introduction from "./Introduction";
import CoffeeMenu from "./CoffeeMenu";
import { coffees } from "../data";
import { filterReducer } from "../reducers/filterReducer";
import { FilterActionType, FilterType } from "../types/filter";

function App() {
  const [filter, dispatch] = React.useReducer(filterReducer, {
    filterType: FilterActionType.FILTER_ALL,
    list: coffees,
  });

  const handleFilter = (filterType: FilterType) => {
    dispatch({ type: filterType, currentList: coffees });
  };

  return (
    <>
      <Background />
      <main className="flex min-h-screen items-start justify-center px-8 pb-12 pt-40 bigger-mobile:pl-[135px] bigger-mobile:pr-[120px] tablet:px-[156px] desktop:px-[93px]">
        <FilterableCoffeeList>
          <Introduction />
          <div className="mt-5">
            <Filters onFilter={handleFilter} activeFilter={filter.filterType} />
          </div>
          <div className="mt-9 max-w-5xl">
            <CoffeeMenu coffees={filter.list} />
          </div>
        </FilterableCoffeeList>
      </main>
    </>
  );
}

export default App;
