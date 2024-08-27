import React from "react";
import { Vector } from "../../images";

type Props = {
  children: React.ReactNode;
};

const FilterableCoffeeList = ({ children }: Props) => {
  return (
    <section className="font-regular relative overflow-x-hidden rounded-xl bg-shark px-9 pb-20 pt-24 text-base text-bridalhealth tablet:pt-[5.2rem]">
      <Vector
        className="absolute right-1/2 top-6 translate-x-full"
        aria-hidden={true}
      />
      {children}
    </section>
  );
};

export default FilterableCoffeeList;
