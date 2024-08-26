import Background from "../Background";
import FilterableCoffeeList from "../FilterableCoffeeList";
import Filters from "../Filters";
import Introduction from "../Introduction";

function App() {
  return (
    <>
      <Background />
      <main className="min-h-screen flex justify-center">
        <FilterableCoffeeList>
          <Introduction />
          <Filters />
        </FilterableCoffeeList>
      </main>
    </>
  );
}

export default App;
