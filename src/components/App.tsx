import React from "react";
import Background from "./Background";
import FilterableCoffeeList from "./FilterableCoffeeList";
import Filters from "./Filters";
import Introduction from "./Introduction";
import CoffeeMenu from "./CoffeeMenu";
import { coffees } from "../data";
import { ICoffee } from "./Coffee";

function App() {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [filteredCoffees, setFilteredCoffees] =
    React.useState<ICoffee[]>(coffees);

  const handleFilterAll = () => {
    setFilteredCoffees(coffees);
    setActiveFilter("all");
  };

  const handleFilterAvailable = () => {
    setFilteredCoffees((prevCoffees) =>
      [...prevCoffees].filter((coffee) => coffee.available),
    );
    setActiveFilter("available");
  };

  return (
    <>
      <Background />
      <main className="bigger-mobile:pl-[135px] bigger-mobile:pr-[120px] flex min-h-screen items-start justify-center px-8 pb-12 pt-40 tablet:px-[156px] desktop:px-[93px]">
        <FilterableCoffeeList>
          <Introduction />
          <div className="mt-5">
            <Filters
              activeFilter={activeFilter}
              onFilterAll={handleFilterAll}
              onFilterAvailable={handleFilterAvailable}
            />
          </div>
          <div className="mt-10 max-w-5xl">
            <CoffeeMenu coffees={filteredCoffees} />
          </div>
        </FilterableCoffeeList>
      </main>
    </>
  );
}

export default App;
