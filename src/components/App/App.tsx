import Background from "../Background";
import FilterableCoffeeList from "../FilterableCoffeeList";
import Filters from "../Filters";
import Introduction from "../Introduction";
import CoffeeMenu from "../CoffeeMenu";
import { coffees } from "../../data";

function App() {
  return (
    <>
      <Background />
      <main className="min-h-screen flex justify-center items-start">
        <FilterableCoffeeList>
          <Introduction />
          <Filters />
          <CoffeeMenu coffees={coffees} />
        </FilterableCoffeeList>
      </main>
    </>
  );
}

export default App;
