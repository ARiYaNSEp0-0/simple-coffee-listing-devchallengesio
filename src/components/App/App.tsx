import React from "react";
import Background from "../Background";
import FilterableCoffeeList from "../FilterableCoffeeList";
import Filters from "../Filters";
import Introduction from "../Introduction";
import CoffeeMenu from "../CoffeeMenu";
import { coffees } from "../../data";
import { ICoffee } from "../Coffee";

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
  //  mt-40 mb-12
  return (
    <>
      <Background />
      <main className="flex min-h-screen items-start justify-center pb-12 pl-[135px] pr-[120px] pt-40">
        <FilterableCoffeeList>
          <Introduction />
          <Filters
            activeFilter={activeFilter}
            onFilterAll={handleFilterAll}
            onFilterAvailable={handleFilterAvailable}
          />
          <CoffeeMenu coffees={filteredCoffees} />
        </FilterableCoffeeList>
      </main>
    </>
  );
}

export default App;
