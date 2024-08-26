import React from "react";
import { Vector } from "../../images";

type Props = {
  children: React.ReactNode;
};

const FilterableCoffeeList = ({ children }: Props) => {
  return (
    <section className="bg-shark text-bridalhealth py-24 px-[32px] text-base rounded-xl flex font-semibold items-center flex-col gap-5 relative">
      <Vector className="absolute right-0 top-2" aria-hidden={true} />
      {children}
    </section>
  );
};

export default FilterableCoffeeList;
