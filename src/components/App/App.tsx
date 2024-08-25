import Background from "../Background";
import FilterableCoffeeList from "../FilterableCoffeeList";

function App() {
  return (
    <>
      <Background />
      <main className="min-h-screen flex justify-center items-center">
        <FilterableCoffeeList />
      </main>
    </>
  );
}

export default App;
