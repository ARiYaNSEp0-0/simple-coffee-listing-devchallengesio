import Coffee from "../Coffee";
import { ICoffee } from "../../types";

const CoffeeMneu = ({ coffees }: { coffees: ICoffee[] }) => {
  return (
    <ul className="flex flex-wrap content-start justify-center gap-y-16 tablet:gap-x-8">
      {coffees.map(({ id, ...coffee }) => (
        <Coffee key={id} {...coffee} />
      ))}
    </ul>
  );
};

export default CoffeeMneu;
