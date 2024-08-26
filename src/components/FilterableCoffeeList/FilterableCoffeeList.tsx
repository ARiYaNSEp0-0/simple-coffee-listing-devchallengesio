import React from "react";

type Props = {
  children: React.ReactNode;
};

const FilterableCoffeeList = ({ children }: Props) => {
  return (
    <section className="bg-shark w-7/12 text-bridalhealth py-20 px-8 text-base rounded-md mt-32 flex  items-center flex-col space-y-4">
      {children}
    </section>
  );
};

export default FilterableCoffeeList;
