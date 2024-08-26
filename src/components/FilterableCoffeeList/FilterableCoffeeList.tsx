import React from "react";
import { Vector } from "../../images";

type Props = {
  children: React.ReactNode;
};

const FilterableCoffeeList = ({ children }: Props) => {
  return (
    <section className="font-regular relative flex flex-col items-center rounded-xl bg-shark px-9 pb-20 pt-24 text-base text-bridalhealth tablet:pt-20">
      <Vector className="absolute right-0 top-2" aria-hidden={true} />
      {children}
    </section>
  );
};

export default FilterableCoffeeList;
