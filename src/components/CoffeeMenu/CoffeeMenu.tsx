import Coffee, { ICoffee } from "../Coffee";

const CoffeeMneu = ({ coffees }: { coffees: ICoffee[] }) => {
  return (
    <ul className="flex flex-wrap gap-8 justify-center">
      {coffees.map(({ id, ...coffee }) => (
        <Coffee key={id} {...coffee} />
      ))}
    </ul>
  );
};

export default CoffeeMneu;
