import Coffee, { ICoffee } from "../Coffee";

const CoffeeMneu = ({ coffees }: { coffees: ICoffee[] }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-12">
      {coffees.map(({ id, ...coffee }) => (
        <Coffee key={id} {...coffee} />
      ))}
    </ul>
  );
};

export default CoffeeMneu;
