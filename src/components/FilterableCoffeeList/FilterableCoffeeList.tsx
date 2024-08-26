import React from "react";
import { Vector } from "../../images";

type Props = {
  children: React.ReactNode;
};

const FilterableCoffeeList = ({ children }: Props) => {
  return (
    <section className="relative flex flex-col items-center gap-5 rounded-xl bg-shark px-[32px] py-24 text-base font-semibold text-bridalhealth">
      <Vector className="absolute right-0 top-2" aria-hidden={true} />
      {children}
    </section>
  );
};

export default FilterableCoffeeList;
